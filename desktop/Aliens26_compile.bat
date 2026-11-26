@echo off
rem Build Aliens26.lpi - file is rewritten on every compile
cd /d "D:\_F\balan\_SyntaxHLClaude\SyntaxHLBeta\projects\alien26\desktop"
"C:\lazarus\lazbuild.exe" --compiler="C:\FPC\3.2.2\bin\i386-win32\fpc.exe" --os=win64 --cpu=x86_64 "D:\_F\balan\_SyntaxHLClaude\SyntaxHLBeta\projects\alien26\desktop\Aliens26.lpi"
pause
