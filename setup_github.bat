@echo off
echo Initializing Git repository...
git init
git add .
git commit -m "Initial commit"
git branch -M main

echo.
echo Attempting to create GitHub repository using 'gh' CLI...
echo If you haven't logged in, run 'gh auth login' first.
echo If 'gh' is not installed, you will see an error below.
echo.

gh repo create portfolio --public --source=. --remote=origin --push

if %errorlevel% neq 0 (
    echo.
    echo ----------------------------------------------------------------
    echo AUTOMATIC CREATION FAILED or 'gh' not installed.
    echo.
    echo Please create the repository manually at https://github.com/new
    echo Name it 'portfolio'.
    echo Do NOT add README, .gitignore or license.
    echo.
    echo Then run:
    echo git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
    echo git push -u origin main
    echo ----------------------------------------------------------------
)

echo.
echo Done.
pause
