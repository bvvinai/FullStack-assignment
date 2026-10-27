import os
import subprocess
import sys

wat_path = 'arithmetic.wat'
wasm_path = 'arithmetic.wasm'

with open(wat_path, 'w', encoding='utf-8') as f:
    f.write('''(module
  (func (export "add") (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.add)

  (func (export "multiply") (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.mul)
)
''')

cmd = ['npx', '-y', '-p', 'wabt', 'wat2wasm', wat_path, '-o', wasm_path]
result = subprocess.run(cmd, capture_output=True, text=True)
if result.returncode != 0:
    print(result.stdout)
    print(result.stderr)
    sys.exit(result.returncode)

print(f'Generated {wasm_path} using WAT -> WASM compilation')
