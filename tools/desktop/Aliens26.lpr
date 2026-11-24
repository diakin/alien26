program Aliens26;

{$MODE Delphi}

{$I cef.inc}

uses
  Forms, Windows, LCLIntf, LCLType, LMessages, Interfaces,
  uCEFApplication,
  uMain in 'uMain.pas' {MainForm};

{$SetPEFlags IMAGE_FILE_LARGE_ADDRESS_AWARE}

begin
  // Тот же exe запускается и как подпроцесс CEF (рендер, GPU и т.д.).
  // StartMainProcess вернёт True только в основном процессе.
  CreateGlobalCEFApp;

  if GlobalCEFApp.StartMainProcess then
    begin
      Application.Initialize;
      Application.Title := 'Aliens26';
      Application.CreateForm(TMainForm, MainForm);
      Application.Run;
    end;

  DestroyGlobalCEFApp;
end.
