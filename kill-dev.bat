@echo off
REM Windows batch script to quickly kill development servers
REM Fast and simple method for Windows 11

REM Kill node processes related to development (preserve Claude Code)
for /f "tokens=2" %%i in ('tasklist /fi "imagename eq node.exe" /fo csv ^| findstr /v "claude-code" ^| findstr /i "gatsby\|webpack\|dev-server"') do (
    taskkill /pid %%i /f >nul 2>&1
)

REM Kill yarn processes
taskkill /im yarn.exe /f >nul 2>&1

echo Development servers stopped