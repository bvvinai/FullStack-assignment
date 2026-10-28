# Question 4 - Go WebAssembly arithmetic module

This program compiles Go to WebAssembly, exposes `add` and `multiply` to JavaScript using `syscall/js`, and calls both exports from a Node.js host.

## Build and run in PowerShell

```powershell
$env:GOOS = 'js'
$env:GOARCH = 'wasm'
go build -o arithmetic.wasm main.go
Remove-Item Env:GOOS
Remove-Item Env:GOARCH
node host.js
```

Expected output:

```text
add(10, 5) = 15
multiply(10, 5) = 50
```

The host locates `wasm_exec.js` from the installed Go toolchain; no npm packages are required.# Question 4 - WebAssembly arithmetic module

## Build the module

```bash
python3 generate_wasm.py
```

## Run the host

```bash
node host.js
```

The script writes the WAT source and generates the matching WebAssembly binary using Python's standard library. The module exports:
- add(a, b)
- multiply(a, b)

The JavaScript host loads the `.wasm` file and prints the results.
