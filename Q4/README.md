# Question 4 - Go WebAssembly arithmetic module

The Go program exposes `add` and `multiply` to JavaScript using `syscall/js`. The Node.js host loads the module with Go's WebAssembly runtime, calls both functions, and prints their results.

## Build and run in PowerShell

```powershell
$env:GOOS = 'js'
$env:GOARCH = 'wasm'
go build -o arithmetic.wasm .
Remove-Item Env:GOOS
Remove-Item Env:GOARCH
node host.js
```

Expected output:

```text
add(10, 5) = 15
multiply(10, 5) = 50
```

The `js/wasm` build constraint keeps `syscall/js` out of native builds and editor analysis. No npm packages are required.
