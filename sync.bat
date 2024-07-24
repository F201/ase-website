@echo off

rem Creating target directories if they don't exist
mkdir frontend\src\contracts
mkdir functions\src\contracts

rem Loop through directories in contracts folder and copy them to target directories, excluding node_modules
for /D %%i in (contracts\*) do (
    if /I not "%%~nxi"=="node_modules" (
        robocopy "%%i" "frontend\src\contracts\%%~nxi" /E > nul
        robocopy "%%i" "functions\src\contracts\%%~nxi" /E > nul
    )
)
