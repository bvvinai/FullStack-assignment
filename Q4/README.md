# Question 4 - WebAssembly arithmetic module

## Build the module

```bash
python3 generate_wasm.py
```

## Run the host

```bash
node host.js
```

This compiles a simple WebAssembly module from WAT that exports:
- add(a, b)
- multiply(a, b)

The JavaScript host loads the `.wasm` file and prints the results.
