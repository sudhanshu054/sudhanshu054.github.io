Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
Remove-Item -Recurse -Force "D:\Portfolio\node_modules" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "D:\Portfolio\dist" -ErrorAction SilentlyContinue
npm install
npx vite build
