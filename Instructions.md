# Full Stack Application Development Assignment

This project contains the four required solutions:

- Q1: LocalStorage To Do app
- Q2: React color palette app
- Q3: Webpack module federation microfrontend shell with FSAD and ApiProducts remotes
- Q4: WebAssembly arithmetic module and JavaScript host

## Run instructions

### Q1
```bash
cd Q1
python3 -m http.server 8000
```
Open `http://localhost:8000` in a browser.

### Q2
```bash
cd Q2
npm install
npm run dev -- --host 0.0.0.0
```
Open the local Vite URL shown in the console.

### Q3
Start each app in a separate terminal:
```bash
cd Q3/fsad-app
npm install
npm run start
```
```bash
cd Q3/api-products-app
npm install
npm run start
```
```bash
cd Q3/shell
npm install
npm run start
```
Then open `http://localhost:3000`.

### Q4
Build and run from PowerShell:
```powershell
cd Q4
$env:GOOS = 'js'
$env:GOARCH = 'wasm'
go build -o arithmetic.wasm main.go
Remove-Item Env:GOOS
Remove-Item Env:GOARCH
node host.js
```
