@echo off

rem Creating target directory if not exists
mkdir frontend\src\contracts
mkdir functions\src\contracts

rem Loop through directories in contracts folder and copy them to frontend\src\contracts
for /D %%i in (contracts\*) do (
    if not "%%i"=="contracts\node_modules" (
        robocopy "%%i" "frontend\src\contracts\%%~nxi" /E > nul
    )
)

rem Loop through directories in contracts folder and copy them to functions\src\contracts
for /D %%i in (contracts\*) do (
    if not "%%i"=="contracts\node_modules" (
        robocopy "%%i" "functions\src\contracts\%%~nxi" /E > nul
    )
)