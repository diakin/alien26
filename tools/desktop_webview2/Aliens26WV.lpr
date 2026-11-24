program Aliens26WV;

{$MODE Delphi}

uses
  Forms, Interfaces,
  uMainWV in 'uMainWV.pas' {MainForm};

{$SetPEFlags $20}  // IMAGE_FILE_LARGE_ADDRESS_AWARE

begin
  // Загрузчик WebView2 создаётся в секции initialization модуля uMainWV,
  // окружение браузера поднимается асинхронно.
  Application.Initialize;
  Application.Title := 'Aliens26';
  Application.MainFormOnTaskbar := True;
  Application.CreateForm(TMainForm, MainForm);
  Application.Run;
end.
