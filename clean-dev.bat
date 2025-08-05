@echo off
echo 🧹 Starting Gatsby clean development server...

echo 📁 Stopping any running Node.js processes...
taskkill /f /im node.exe >nul 2>&1

echo 📁 Waiting for processes to stop...
timeout /t 2 /nobreak >nul

echo 📁 Removing cache directories...
if exist ".cache" rmdir /s /q ".cache" >nul 2>&1
if exist "public" rmdir /s /q "public" >nul 2>&1
if exist "node_modules\.cache\babel-loader" rmdir /s /q "node_modules\.cache\babel-loader" >nul 2>&1
if exist "node_modules\.cache\terser-webpack-plugin" rmdir /s /q "node_modules\.cache\terser-webpack-plugin" >nul 2>&1

echo 🚀 Starting Gatsby development server...
gatsby develop -H 0.0.0.0