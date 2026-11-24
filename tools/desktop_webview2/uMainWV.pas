unit uMainWV;

{ Оболочка Aliens26 на WebView2 (WebView4Delphi). Браузер не поставляется
  вместе с программой: используется установленный в системе
  Microsoft Edge WebView2 Runtime. Для Windows 7 последняя версия — 109.

  Клавиши:
    F11            — полноэкранный режим вкл/выкл
    F5             — перезагрузить страницу
    Ctrl+F5        — перезагрузить без кэша
    F12            — инструменты разработчика
    Esc            — передаётся игре (окно не закрывает)

  Параметры командной строки:
    Aliens26WV.exe [страница.html] [/fullscreen] [/nogpu] [/dllloader] [/runtime=папка]
    страница   — имя файла внутри папки game (по умолчанию globe.html)
    /dllloader — загружать WebView2Loader.dll вместо встроенного загрузчика
    /runtime=  — папка Fixed Version Runtime (если рантайм не установлен в систему) }

{$MODE Delphi}

interface

uses
  Windows, LCLIntf, LCLType, Messages, SysUtils, Classes, Types,
  Graphics, Controls, Forms, Dialogs, ExtCtrls,
  uWVBrowser, uWVWindowParent, uWVLoader, uWVBrowserBase, uWVTypes, uWVEvents,
  uWVTypeLibrary, uWVCoreWebView2Args;

type

  { TMainForm }

  TMainForm = class(TForm)
    WVWindowParent1: TWVWindowParent;
    WVBrowser1: TWVBrowser;
    Timer1: TTimer;
    procedure FormCreate(Sender: TObject);
    procedure FormShow(Sender: TObject);
    procedure Timer1Timer(Sender: TObject);
    procedure WVBrowser1AfterCreated(Sender: TObject);
    procedure WVBrowser1InitializationError(Sender: TObject;
      aErrorCode: HRESULT; const aErrorMessage: wvstring);
    procedure WVBrowser1DocumentTitleChanged(Sender: TObject);
    procedure WVBrowser1ContainsFullScreenElementChanged(Sender: TObject);
    procedure WVBrowser1NewWindowRequested(Sender: TObject;
      const aWebView: ICoreWebView2; const aArgs: ICoreWebView2NewWindowRequestedEventArgs);
    procedure WVBrowser1WindowCloseRequested(Sender: TObject);
    procedure WVBrowser1AcceleratorKeyPressed(Sender: TObject;
      const aController: ICoreWebView2Controller;
      const aArgs: ICoreWebView2AcceleratorKeyPressedEventArgs);
  private
    FGameUrl        : string;
    FTriedPaths     : string;
    FErrorShown     : boolean;

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
    procedure StartBrowser;
    procedure ShowRuntimeError(const aDetails : string);
    procedure HandleHotkey(aVirtualKey : LongWord);
    procedure UpdateFullscreen;
    procedure SetWindowFullscreen(aEnable : boolean);
  protected
    procedure WMMove(var aMessage : TWMMove); message WM_MOVE;
    procedure WMMoving(var aMessage : TMessage); message WM_MOVING;
  end;

var
  MainForm: TMainForm;

implementation

{$R *.lfm}

// События WebView2 приходят в основном потоке, поэтому с формой можно
// работать прямо из обработчиков, без PostMessage.

// ---------------------------------------------------------------------------
// Вспомогательные функции

// Значение параметра вида /name=value (или -name=value), пустая строка если его нет.
function SwitchValue(const aName : string) : string;
var
  index    : integer;
  argValue : string;
  prefix   : string;
begin
  Result := '';
  prefix := LowerCase(aName) + '=';

  for index := 1 to ParamCount do
    begin
      argValue := ParamStr(index);
      if (length(argValue) > 1) and (argValue[1] in ['/', '-']) and
         (Pos(prefix, LowerCase(Copy(argValue, 2, MaxInt))) = 1) then
        begin
          Result := Copy(argValue, length(prefix) + 2, MaxInt);
          exit;
        end;
    end;
end;

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

// Ищет папку game: рядом с exe, затем выше по дереву
// (tools\desktop_webview2\dist -> корень репозитория).
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

  candidate   := baseDir + aPageName;
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
  FErrorShown     := False;
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

  WVBrowser1.DefaultURL := UnicodeString(FGameUrl);
  StartBrowser;
end;

// Окружение WebView2 создаётся асинхронно; пока оно не готово — ждём по таймеру.
procedure TMainForm.StartBrowser;
begin
  if GlobalWebView2Loader.InitializationError then
    ShowRuntimeError(UTF8Encode(GlobalWebView2Loader.ErrorMessage))
   else
    if GlobalWebView2Loader.Initialized then
      WVBrowser1.CreateBrowser(WVWindowParent1.Handle)
     else
      Timer1.Enabled := True;
end;

procedure TMainForm.Timer1Timer(Sender: TObject);
begin
  Timer1.Enabled := False;
  StartBrowser;
end;

procedure TMainForm.ShowRuntimeError(const aDetails : string);
var
  installedVersion : string;
begin
  if FErrorShown then exit;
  FErrorShown := True;

  installedVersion := UTF8Encode(GlobalWebView2Loader.InstalledRuntimeVersion);
  if installedVersion = '' then installedVersion := 'не найден';

  MessageDlg('Aliens26',
             'Не удалось запустить WebView2.' + LineEnding + LineEnding +
             aDetails + LineEnding + LineEnding +
             'Установленный WebView2 Runtime: ' + installedVersion + LineEnding +
             'Для Windows 7 нужен Microsoft Edge WebView2 Runtime версии 109.' + LineEnding +
             'Варианты запуска: /dllloader, /runtime=папка_fixed_runtime, /nogpu.',
             mtError, [mbOK], 0);
end;

// ---------------------------------------------------------------------------
// События браузера

procedure TMainForm.WVBrowser1AfterCreated(Sender: TObject);
begin
  WVWindowParent1.UpdateSize;

  // Правая кнопка мыши в игре — своё действие, стандартное меню браузера не нужно.
  WVBrowser1.DefaultContextMenusEnabled := False;
  WVBrowser1.StatusBarEnabled           := False;
  WVBrowser1.ZoomControlEnabled         := False;  // Ctrl+колесо не масштабирует страницу
end;

procedure TMainForm.WVBrowser1InitializationError(Sender: TObject;
  aErrorCode: HRESULT; const aErrorMessage: wvstring);
begin
  ShowRuntimeError(UTF8Encode(aErrorMessage) + ' (код ' + IntToHex(aErrorCode, 8) + ')');
end;

procedure TMainForm.WVBrowser1DocumentTitleChanged(Sender: TObject);
var
  pageTitle : string;
begin
  pageTitle := UTF8Encode(WVBrowser1.DocumentTitle);
  if pageTitle <> '' then
    Caption := pageTitle
   else
    Caption := 'Aliens26';
end;

procedure TMainForm.WVBrowser1ContainsFullScreenElementChanged(Sender: TObject);
begin
  FPageFullscreen := WVBrowser1.ContainsFullScreenElement;
  UpdateFullscreen;
end;

procedure TMainForm.WVBrowser1NewWindowRequested(Sender: TObject;
  const aWebView: ICoreWebView2; const aArgs: ICoreWebView2NewWindowRequestedEventArgs);
var
  requestArgs : TCoreWebView2NewWindowRequestedEventArgs;
begin
  // Новые окна не открываем: игра работает в одном окне.
  requestArgs := TCoreWebView2NewWindowRequestedEventArgs.Create(aArgs);
  try
    requestArgs.Handled := True;
  finally
    requestArgs.Free;
  end;
end;

procedure TMainForm.WVBrowser1WindowCloseRequested(Sender: TObject);
begin
  // Страница вызвала window.close().
  Close;
end;

procedure TMainForm.WVBrowser1AcceleratorKeyPressed(Sender: TObject;
  const aController: ICoreWebView2Controller;
  const aArgs: ICoreWebView2AcceleratorKeyPressedEventArgs);
var
  keyArgs : TCoreWebView2AcceleratorKeyPressedEventArgs;
begin
  keyArgs := TCoreWebView2AcceleratorKeyPressedEventArgs.Create(aArgs);
  try
    if (keyArgs.KeyEventKind = COREWEBVIEW2_KEY_EVENT_KIND_KEY_DOWN) then
      case keyArgs.VirtualKey of
        VK_F5, VK_F11, VK_F12 :
          begin
            keyArgs.Handled := True;  // встроенную обработку браузера отключаем
            HandleHotkey(keyArgs.VirtualKey);
          end;
      end;
  finally
    keyArgs.Free;
  end;
end;

procedure TMainForm.HandleHotkey(aVirtualKey : LongWord);
var
  noCache : boolean;
begin
  noCache := (GetKeyState(VK_CONTROL) < 0) or (GetKeyState(VK_SHIFT) < 0);

  case aVirtualKey of
    VK_F11 :
      if FKeyFullscreen or FPageFullscreen then
        begin
          FKeyFullscreen := False;
          // Выход из Fullscreen API жеста пользователя не требует.
          if FPageFullscreen then
            WVBrowser1.ExecuteScript('if (document.fullscreenElement) document.exitFullscreen();');
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
        WVBrowser1.RefreshIgnoreCache
       else
        WVBrowser1.Refresh;

    VK_F12 :
      WVBrowser1.OpenDevToolsWindow;
  end;
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

  if (WVBrowser1 <> nil) then WVBrowser1.NotifyParentWindowPositionChanged;
end;

// ---------------------------------------------------------------------------

// Без этих вызовов выпадающие элементы страницы смещаются после перемещения окна.
procedure TMainForm.WMMove(var aMessage : TWMMove);
begin
  inherited;
  if (WVBrowser1 <> nil) then WVBrowser1.NotifyParentWindowPositionChanged;
end;

procedure TMainForm.WMMoving(var aMessage : TMessage);
begin
  inherited;
  if (WVBrowser1 <> nil) then WVBrowser1.NotifyParentWindowPositionChanged;
end;

// ---------------------------------------------------------------------------

procedure ConfigureLoader;
var
  exeDir      : string;
  runtimeDir  : string;
begin
  exeDir := ExtractFilePath(ParamStr(0));

  GlobalWebView2Loader := TWVLoader.Create(nil);

  // Профиль браузера: здесь хранится localStorage (сохранения базы, настройки).
  GlobalWebView2Loader.UserDataFolder := UTF8Decode(exeDir + 'userdata');

  // Встроенный загрузчик (OpenWebView2Loader) вместо WebView2Loader.dll:
  // новые версии DLL из NuGet на Windows 7 не проверялись авторами.
  // /dllloader — использовать WebView2Loader.dll из папки exe.
  if FindCmdLineSwitch('dllloader', ['/', '-'], True) then
    begin
      GlobalWebView2Loader.UseInternalLoader := False;
      GlobalWebView2Loader.LoaderDllPath     := UTF8Decode(exeDir + 'WebView2Loader.dll');
    end
   else
    GlobalWebView2Loader.UseInternalLoader := True;

  // Fixed Version Runtime из указанной папки вместо установленного в систему.
  runtimeDir := SwitchValue('runtime');
  if runtimeDir <> '' then
    GlobalWebView2Loader.BrowserExecPath := UTF8Decode(ExpandFileName(runtimeDir));

  // Разрешаем рантаймы старше той версии, под которую собран WebView4Delphi
  // (на Windows 7 будет 109). Часть функций компонента там недоступна,
  // для игры они не используются.
  GlobalWebView2Loader.AllowOldRuntime                := True;
  GlobalWebView2Loader.TargetCompatibleBrowserVersion := '95.0.1020.44';

  GlobalWebView2Loader.Language                    := 'ru';
  GlobalWebView2Loader.AutoplayPolicy              := appNoUserGestureRequired;  // звук без клика
  GlobalWebView2Loader.AllowFileAccessFromFiles    := True;   // игра открыта по file://
  GlobalWebView2Loader.EnableGPU                   := not FindCmdLineSwitch('nogpu', ['/', '-'], True);
  GlobalWebView2Loader.DisableBackgroundNetworking := True;
  GlobalWebView2Loader.EnableTrackingPrevention    := False;

  GlobalWebView2Loader.StartWebView2;
end;

initialization
  ConfigureLoader;

  // GlobalWebView2Loader освобождается в секции finalization модуля uWVLoader.

end.
