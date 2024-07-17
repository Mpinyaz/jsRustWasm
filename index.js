import init from "./pkg/js_wasm";

const runWasm = async () => {
  const helloWorld = await init("./pkg/js_wasm_bg.wasm");
  helloWorld.greet("WebAssembly");
};

runWasm();
