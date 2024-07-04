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

rem Command 1: Run the first npm build
start cmd /c "cd functions && npm run build && npm run build:watch"

rem Command 2: Run the second npm build
start cmd /c "cd frontend && npm run build && npm run build:watch"

rem Command 3: Start Firebase emulators
start cmd /c "cd frontend && npm run storybook"

rem Command 4: Start Firebase emulators
start cmd /c "firebase emulators:start"


