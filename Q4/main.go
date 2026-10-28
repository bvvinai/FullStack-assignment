package main

import "syscall/js"

var (
	addFunc      js.Func
	multiplyFunc js.Func
	shutdownFunc js.Func
	done         = make(chan struct{})
)

func main() {
	addFunc = js.FuncOf(func(_ js.Value, args []js.Value) any {
		return args[0].Int() + args[1].Int()
	})
	multiplyFunc = js.FuncOf(func(_ js.Value, args []js.Value) any {
		return args[0].Int() * args[1].Int()
	})
	shutdownFunc = js.FuncOf(func(_ js.Value, _ []js.Value) any {
		close(done)
		return nil
	})

	js.Global().Set("add", addFunc)
	js.Global().Set("multiply", multiplyFunc)
	js.Global().Set("shutdownWasm", shutdownFunc)
	js.Global().Call("onWasmReady")

	<-done
}
