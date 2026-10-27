const fs = require('fs');

async function loadWasm() {
  const wasmBytes = fs.readFileSync('./arithmetic.wasm');
  const module = await WebAssembly.instantiate(wasmBytes, {});
  return module.instance.exports;
}

async function main() {
  const exports = await loadWasm();
  const addResult = exports.add(10, 5);
  const multiplyResult = exports.multiply(10, 5);

  console.log('add(10, 5) =', addResult);
  console.log('multiply(10, 5) =', multiplyResult);
}

main().catch((error) => {
  console.error('Error loading WebAssembly module:', error);
  process.exit(1);
});
