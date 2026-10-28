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
go build -o arithmetic.wasm .
Remove-Item Env:GOOS
Remove-Item Env:GOARCH
node host.js
```

## Solution explanations

### Q1: To-Do App
The app lets users add tasks, mark them complete, and delete them. Tasks are stored in the browser's `localStorage`, so they remain available after the page is refreshed.

### Q2: Color Palette
The React app displays selectable color swatches and lets users add a random color or remove a swatch. Context shares the palette and selection state across the components.

### Q3: Microfrontend Shell
The shell loads the FSAD and ApiProducts syllabus apps as separate Webpack Module Federation remotes. Each remote owns and displays its syllabus, while the shell brings both into one page.

### Q4: Go WebAssembly Arithmetic
The Go program exposes `add` and `multiply` to JavaScript using `syscall/js` and is compiled to WebAssembly. The Node.js host loads the module, calls both functions, and prints their results.
