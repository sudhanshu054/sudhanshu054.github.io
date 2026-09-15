Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force
Remove-Item -Recurse -Force "D:\Portfolio\dist" -ErrorAction SilentlyContinue
npx vite build
