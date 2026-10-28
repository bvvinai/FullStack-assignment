const { execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

async function main() {
  if (!globalThis.crypto) {
    globalThis.crypto = require('node:crypto').webcrypto;
  }

  const goRoot = execFileSync('go', ['env', 'GOROOT'], { encoding: 'utf8' }).trim();
  require(path.join(goRoot, 'lib', 'wasm', 'wasm_exec.js'));

  const go = new globalThis.Go();
  const wasmPath = path.join(__dirname, 'arithmetic.wasm');
  const { instance } = await WebAssembly.instantiate(
    fs.readFileSync(wasmPath),
    go.importObject,
  );

  let markReady;
  const ready = new Promise((resolve) => {
    markReady = resolve;
  });
  globalThis.onWasmReady = markReady;

  const runPromise = go.run(instance);
  await ready;

  console.log('add(10, 5) =', globalThis.add(10, 5));
  console.log('multiply(10, 5) =', globalThis.multiply(10, 5));

  globalThis.shutdownWasm();
  await runPromise;
}

main().catch((error) => {
  console.error('Error running Go WebAssembly module:', error);
  process.exitCode = 1;
});