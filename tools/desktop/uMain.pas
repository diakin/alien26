unit uMain;

{ Оболочка Aliens26: окно с встроенным Chromium (CEF4Delphi, ветка 109 —
  последняя с поддержкой Windows 7). Открывает game\globe.html с диска.

  Клавиши:
    F11            — полноэкранный режим вкл/выкл
    F5             — перезагрузить страницу
    Ctrl+F5        — перезагрузить без кэша
    F12            — инструменты разработчика
    Esc            — передаётся игре (окно не закрывает)

  Параметры командной строки:
    Aliens26.exe [страница.html] [/fullscreen] [/nogpu]
    страница — имя файла внутри папки game (по умолчанию globe.html) }

{$MODE Delphi}

interface

uses
  Windows, LCLIntf, LCLType, LMessages, Messages, SysUtils, Classes, Types,
  Graphics, Controls, Forms, Dialogs, ExtCtrls,
  uCEFChromium, uCEFWindowParent, uCEFInterfaces, uCEFTypes, uCEFConstants,
  uCEFWinControl;

const
  MSG_HOTKEY          = WM_APP + $B01;  // wParam = код клавиши, lParam = модификаторы CEF
  MSG_PAGE_FULLSCREEN = WM_APP + $B02;  // wParam = 1 вход, 0 выход
  MSG_TITLE           = WM_APP + $B03;  // lParam = PUnicodeString (освобождает получатель)

type
  { TMainForm }

  TMainForm = class(TForm)
    CEFWindowParent1: TCEFWindowParent;
    Chromium1: TChromium;
    Timer1: TTimer;
    procedure FormCreate(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure FormCloseQuery(Sender: TObject; var CanClose: Boolean);
    procedure Timer1Timer(Sender: TObject);
    procedure Chromium1AfterCreated(Sender: TObject; const browser: ICefBrowser);
    procedure Chromium1BeforeClose(Sender: TObject; const browser: ICefBrowser);
    procedure Chromium1Close(Sender: TObject; const browser: ICefBrowser;
      var aAction : TCefCloseBrowserAction);
    procedure Chromium1BeforePopup(Sender: TObject;
      const browser: ICefBrowser; const frame: ICefFrame; const targetUrl,
      targetFrameName: ustring;
      targetDisposition: TCefWindowOpenDisposition; userGesture: Boolean;
      const popupFeatures: TCefPopupFeatures; var windowInfo: TCefWindowInfo;
      var client: ICefClient; var settings: TCefBrowserSettings;
      var extra_info: ICefDictionaryValue;
      var noJavascriptAccess: Boolean; var Result: Boolean);
    procedure Chromium1PreKeyEvent(Sender: TObject;
      const browser: ICefBrowser; const event: PCefKeyEvent; osEvent: TCefEventHandle;
      out isKeyboardShortcut, Result: Boolean);
    procedure Chromium1TitleChange(Sender: TObject; const browser: ICefBrowser;
      const title: ustring);
    procedure Chromium1FullScreenModeChange(Sender: TObject;
      const browser: ICefBrowser; fullscreen: Boolean);
  private
    FCanClose       : boolean;  // True после OnBeforeClose — форму можно уничтожать
    FClosing        : boolean;  // закрытие уже запущено
    FGameUrl        : string;
    FTriedPaths     : string;

    // полноэкранный режим: по F11 и по запросу страницы (Fullscreen API)
    FKeyFullscreen  : boolean;
    FPageFullscreen : boolean;
    FIsFullscreen   : boolean;
    FSavedStyle     : LongInt;
    FSavedExStyle   : LongInt;
    FSavedRect      : TRect;
    FSavedMaximized : boolean;

    function  FindGamePage(const aPageName : string) : string;
    function  StartPageName : string;
    procedure UpdateFullscreen;
    procedure SetWindowFullscreen(aEnable : boolean);
  protected
    procedure WMMove(var aMessage : TWMMove); message WM_MOVE;
    procedure WMMoving(var aMessage : TMessage); message WM_MOVING;
    procedure WMEnterMenuLoop(var aMessage: TMessage); message WM_ENTERMENULOOP;
    procedure WMExitMenuLoop(var aMessage: TMessage); message WM_EXITMENULOOP;
    procedure BrowserCreatedMsg(var aMessage : TMessage); message CEF_AFTERCREATED;
    procedure BrowserDestroyMsg(var aMessage : TMessage); message CEF_DESTROY;
    procedure HotkeyMsg(var aMessage : TMessage); message MSG_HOTKEY;
    procedure PageFullscreenMsg(var aMessage : TMessage); message MSG_PAGE_FULLSCREEN;
    procedure TitleMsg(var aMessage : TMessage); message MSG_TITLE;
  end;

var
  MainForm: TMainForm;

procedure CreateGlobalCEFApp;

implementation

{$R *.lfm}

uses
  uCEFApplication;

// Последовательность закрытия (как в демо CEF4Delphi):
// 1. FormCloseQuery: CanClose := False, вызывается Chromium1.CloseBrowser.
// 2. Chromium1.OnClose: сообщение CEF_DESTROY уничтожает CEFWindowParent1.
// 3. Chromium1.OnBeforeClose: FCanClose := True и повторный WM_CLOSE.

procedure CreateGlobalCEFApp;
begin
  GlobalCEFApp := TCefApplication.Create;

  // Библиотеки CEF лежат в подпапке cef рядом с exe.
  // Относительные пути CEF4Delphi считает от папки exe.
  GlobalCEFApp.FrameworkDirPath := 'cef';
  GlobalCEFApp.ResourcesDirPath := 'cef';
  GlobalCEFApp.LocalesDirPath   := 'cef\locales';

  // Профиль браузера: здесь хранится localStorage (сохранения базы, настройки).
  GlobalCEFApp.RootCache := 'userdata';
  GlobalCEFApp.Cache     := 'userdata\cache';

  GlobalCEFApp.Locale             := 'ru';
  GlobalCEFApp.AcceptLanguageList := 'ru-RU,ru';

  // Звук без предварительного клика по странице.
  GlobalCEFApp.AutoplayPolicy := appNoUserGestureRequired;

  // Игра открывается по file:// — разрешаем страницам читать соседние файлы.
  GlobalCEFApp.AllowFileAccessFromFiles := True;

  // Аппаратное ускорение canvas. /nogpu — если драйвер видеокарты капризничает.
  GlobalCEFApp.EnableGPU := not FindCmdLineSwitch('nogpu', ['/', '-'], True);

  GlobalCEFApp.DisableBackgroundNetworking := True;

  //GlobalCEFApp.LogFile     := 'cef.log';
  //GlobalCEFApp.LogSeverity := LOGSEVERITY_VERBOSE;
end;

// ---------------------------------------------------------------------------
// Поиск страницы игры

// Путь Windows -> file:///C:/.../game/globe.html, не-ASCII и пробелы кодируются.
function FilePathToUrl(const aPath : string) : string;
const
  HEX_DIGITS : array[0..15] of char = '0123456789ABCDEF';
var
  utfBytes : RawByteString;
  index    : integer;
  byteCode : byte;
begin
  utfBytes := UTF8Encode(UnicodeString(aPath));
  Result   := 'file:///';

  for index := 1 to length(utfBytes) do
    begin
      byteCode := ord(utfBytes[index]);

      if char(byteCode) = '\' then
        Result := Result + '/'
       else
        if char(byteCode) in ['A'..'Z', 'a'..'z', '0'..'9', '-', '_', '.', '~', '/', ':'] then
          Result := Result + char(byteCode)
         else
          Result := Result + '%' + HEX_DIGITS[byteCode shr 4] + HEX_DIGITS[byteCode and $F];
    end;
end;

function TMainForm.StartPageName : string;
var
  index    : integer;
  argValue : string;
begin
  Result := 'globe.html';

  for index := 1 to ParamCount do
    begin
      argValue := ParamStr(index);
      if (length(argValue) > 0) and not(argValue[1] in ['/', '-']) then
        begin
          Result := argValue;
          exit;
        end;
    end;
end;

// Ищет папку game: рядом с exe, затем выше по дереву (tools\desktop\dist -> корень репозитория).
// Если exe положен прямо в папку game — тоже находит.
function TMainForm.FindGamePage(const aPageName : string) : string;
var
  baseDir   : string;
  candidate : string;
  level     : integer;
begin
  Result      := '';
  FTriedPaths := '';
  baseDir     := ExtractFilePath(ParamStr(0));

  candidate := baseDir + aPageName;
  FTriedPaths := FTriedPaths + candidate + LineEnding;
  if FileExists(candidate) and FileExists(baseDir + 'js\game.js') then
    begin
      Result := candidate;
      exit;
    end;

  for level := 0 to 4 do
    begin
      candidate   := baseDir + 'game\' + aPageName;
      FTriedPaths := FTriedPaths + candidate + LineEnding;

      if FileExists(candidate) then
        begin
          Result := ExpandFileName(candidate);
          exit;
        end;

      baseDir := ExtractFilePath(ExcludeTrailingPathDelimiter(baseDir));
      if baseDir = '' then exit;
    end;
end;

// ---------------------------------------------------------------------------
// Форма

procedure TMainForm.FormCreate(Sender: TObject);
var
  pagePath : string;
begin
  FCanClose       := False;
  FClosing        := False;
  FKeyFullscreen  := FindCmdLineSwitch('fullscreen', ['/', '-'], True);
  FPageFullscreen := False;
  FIsFullscreen   := False;

  pagePath := FindGamePage(StartPageName);
  if pagePath <> '' then
    FGameUrl := FilePathToUrl(pagePath)
   else
    FGameUrl := '';
end;

procedure TMainForm.FormShow(Sender: TObject);
begin
  if FGameUrl = '' then
    begin
      MessageDlg('Aliens26',
                 'Не найдена страница игры ' + StartPageName + '.' + LineEnding +
                 'Проверены пути:' + LineEnding + FTriedPaths + LineEnding +
                 'Положите exe рядом с папкой game или внутрь неё.',
                 mtError, [mbOK], 0);
      Close;
      exit;
    end;

  if FKeyFullscreen then UpdateFullscreen;

  Chromium1.DefaultUrl := UnicodeString(FGameUrl);

  // Браузер можно создать только после инициализации глобального контекста CEF.
  // Если он ещё не готов — повторяем по таймеру.
  if not(Chromium1.CreateBrowser(CEFWindowParent1, '')) then Timer1.Enabled := True;
end;

procedure TMainForm.Timer1Timer(Sender: TObject);
begin
  Timer1.Enabled := False;
  if not(Chromium1.CreateBrowser(CEFWindowParent1, '')) and not(Chromium1.Initialized) then
    Timer1.Enabled := True;
end;

procedure TMainForm.FormCloseQuery(Sender: TObject; var CanClose: Boolean);
begin
  // Браузер так и не был создан (например, игра не найдена) — закрываемся сразу.
  if not(Chromium1.Initialized) and not(FClosing) then
    begin
      Timer1.Enabled := False;
      CanClose       := True;
      exit;
    end;

  CanClose := FCanClose;

  if not(FClosing) then
    begin
      FClosing := True;
      Visible  := False;
      Chromium1.CloseBrowser(True);
    end;
end;

// ---------------------------------------------------------------------------
// События Chromium (приходят в потоке CEF — в форму только через PostMessage)

procedure TMainForm.Chromium1AfterCreated(Sender: TObject; const browser: ICefBrowser);
begin
  PostMessage(Handle, CEF_AFTERCREATED, 0, 0);
end;

procedure TMainForm.Chromium1Close(Sender: TObject; const browser: ICefBrowser;
  var aAction : TCefCloseBrowserAction);
begin
  // Сюда же попадаем, если страница вызвала window.close().
  FClosing := True;
  PostMessage(Handle, CEF_DESTROY, 0, 0);
  aAction := cbaDelay;
end;

procedure TMainForm.Chromium1BeforeClose(Sender: TObject; const browser: ICefBrowser);
begin
  FCanClose := True;
  PostMessage(Handle, WM_CLOSE, 0, 0);
end;

procedure TMainForm.Chromium1BeforePopup(Sender: TObject;
  const browser: ICefBrowser; const frame: ICefFrame; const targetUrl,
  targetFrameName: ustring; targetDisposition: TCefWindowOpenDisposition;
  userGesture: Boolean; const popupFeatures: TCefPopupFeatures;
  var windowInfo: TCefWindowInfo; var client: ICefClient;
  var settings: TCefBrowserSettings;
  var extra_info: ICefDictionaryValue;
  var noJavascriptAccess: Boolean;
  var Result: Boolean);
begin
  // Новые окна и вкладки не открываем: игра работает в одном окне.
  Result := (targetDisposition in [WOD_NEW_FOREGROUND_TAB, WOD_NEW_BACKGROUND_TAB,
                                   WOD_NEW_POPUP, WOD_NEW_WINDOW]);
end;

procedure TMainForm.Chromium1PreKeyEvent(Sender: TObject;
  const browser: ICefBrowser; const event: PCefKeyEvent; osEvent: TCefEventHandle;
  out isKeyboardShortcut, Result: Boolean);
begin
  Result             := False;
  isKeyboardShortcut := False;

  if (event = nil) or (event.kind <> KEYEVENT_RAWKEYDOWN) then exit;

  case event.windows_key_code of
    VK_F5, VK_F11, VK_F12 :
      begin
        Result := True;  // странице эти клавиши не передаём
        PostMessage(Handle, MSG_HOTKEY, event.windows_key_code, event.modifiers);
      end;
  end;
end;

procedure TMainForm.Chromium1TitleChange(Sender: TObject; const browser: ICefBrowser;
  const title: ustring);
var
  titleCopy : PUnicodeString;
begin
  New(titleCopy);
  titleCopy^ := title;
  if not(PostMessage(Handle, MSG_TITLE, 0, LPARAM(titleCopy))) then Dispose(titleCopy);
end;

procedure TMainForm.Chromium1FullScreenModeChange(Sender: TObject;
  const browser: ICefBrowser; fullscreen: Boolean);
begin
  PostMessage(Handle, MSG_PAGE_FULLSCREEN, ord(fullscreen), 0);
end;

// ---------------------------------------------------------------------------
// Обработчики сообщений (основной поток)

procedure TMainForm.BrowserCreatedMsg(var aMessage : TMessage);
begin
  CEFWindowParent1.UpdateSize;
end;

procedure TMainForm.BrowserDestroyMsg(var aMessage : TMessage);
begin
  CEFWindowParent1.Free;
end;

procedure TMainForm.HotkeyMsg(var aMessage : TMessage);
var
  noCache : boolean;
begin
  noCache := (aMessage.lParam and (EVENTFLAG_CONTROL_DOWN or EVENTFLAG_SHIFT_DOWN)) <> 0;

  case aMessage.wParam of
    VK_F11 :
      if FKeyFullscreen or FPageFullscreen then
        begin
          FKeyFullscreen := False;
          // Выход из Fullscreen API жеста пользователя не требует.
          if FPageFullscreen then
            Chromium1.ExecuteJavaScript('if (document.fullscreenElement) document.exitFullscreen();', '');
          FPageFullscreen := False;
          UpdateFullscreen;
        end
       else
        begin
          FKeyFullscreen := True;
          UpdateFullscreen;
        end;

    VK_F5 :
      if noCache then
        Chromium1.ReloadIgnoreCache
       else
        Chromium1.Reload;

    VK_F12 :
      Chromium1.ShowDevTools(Point(0, 0), nil);
  end;
end;

procedure TMainForm.PageFullscreenMsg(var aMessage : TMessage);
begin
  FPageFullscreen := aMessage.wParam <> 0;
  UpdateFullscreen;
end;

procedure TMainForm.TitleMsg(var aMessage : TMessage);
var
  titleCopy : PUnicodeString;
begin
  titleCopy := PUnicodeString(aMessage.lParam);
  if titleCopy = nil then exit;

  if length(titleCopy^) > 0 then
    Caption := UTF8Encode(titleCopy^)
   else
    Caption := 'Aliens26';

  Dispose(titleCopy);
end;

// ---------------------------------------------------------------------------
// Полноэкранный режим: убираем рамку и растягиваем окно на монитор.
// BorderStyle формы не трогаем — в LCL это пересоздаёт окно вместе с браузером.

procedure TMainForm.UpdateFullscreen;
begin
  SetWindowFullscreen(FKeyFullscreen or FPageFullscreen);
end;

procedure TMainForm.SetWindowFullscreen(aEnable : boolean);
var
  monitorRect : TRect;
begin
  if aEnable = FIsFullscreen then exit;

  if aEnable then
    begin
      FSavedMaximized := IsZoomed(Handle);
      if FSavedMaximized then SendMessage(Handle, WM_SYSCOMMAND, SC_RESTORE, 0);

      FSavedStyle   := GetWindowLong(Handle, GWL_STYLE);
      FSavedExStyle := GetWindowLong(Handle, GWL_EXSTYLE);
      GetWindowRect(Handle, FSavedRect);

      SetWindowLong(Handle, GWL_STYLE, FSavedStyle and not(WS_CAPTION or WS_THICKFRAME));
      SetWindowLong(Handle, GWL_EXSTYLE, FSavedExStyle and
                    not(WS_EX_DLGMODALFRAME or WS_EX_WINDOWEDGE or WS_EX_CLIENTEDGE or WS_EX_STATICEDGE));

      monitorRect := Screen.MonitorFromWindow(Handle).BoundsRect;
      SetWindowPos(Handle, HWND_TOP,
                   monitorRect.Left, monitorRect.Top,
                   monitorRect.Right - monitorRect.Left, monitorRect.Bottom - monitorRect.Top,
                   SWP_NOACTIVATE or SWP_FRAMECHANGED);
    end
   else
    begin
      SetWindowLong(Handle, GWL_STYLE, FSavedStyle);
      SetWindowLong(Handle, GWL_EXSTYLE, FSavedExStyle);
      SetWindowPos(Handle, 0,
                   FSavedRect.Left, FSavedRect.Top,
                   FSavedRect.Right - FSavedRect.Left, FSavedRect.Bottom - FSavedRect.Top,
                   SWP_NOZORDER or SWP_NOACTIVATE or SWP_FRAMECHANGED);
      if FSavedMaximized then SendMessage(Handle, WM_SYSCOMMAND, SC_MAXIMIZE, 0);
    end;

  FIsFullscreen := aEnable;

  if (Chromium1 <> nil) then Chromium1.NotifyMoveOrResizeStarted;
end;

// ---------------------------------------------------------------------------

procedure TMainForm.WMMove(var aMessage : TWMMove);
begin
  inherited;
  if (Chromium1 <> nil) then Chromium1.NotifyMoveOrResizeStarted;
end;

procedure TMainForm.WMMoving(var aMessage : TMessage);
begin
  inherited;
  if (Chromium1 <> nil) then Chromium1.NotifyMoveOrResizeStarted;
end;

procedure TMainForm.WMEnterMenuLoop(var aMessage: TMessage);
begin
  inherited;
  if (aMessage.wParam = 0) and (GlobalCEFApp <> nil) then GlobalCEFApp.OsmodalLoop := True;
end;

procedure TMainForm.WMExitMenuLoop(var aMessage: TMessage);
begin
  inherited;
  if (aMessage.wParam = 0) and (GlobalCEFApp <> nil) then GlobalCEFApp.OsmodalLoop := False;
end;

end.
