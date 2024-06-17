@echo off

rem Command 1: Run the first npm build in a new terminal
start cmd /k "cd functions && npm run build:watch"

rem Command 2: Run the second npm build in a new terminal
start cmd /k "cd frontend && npm run build:watch"

rem Command 3: Start Firebase emulators in a new terminal
start cmd /k "firebase emulators:start"

rem Command 3: Start Firebase emulators in a new terminal
start cmd /k "cd frontend && npm run storybook"
