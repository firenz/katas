import Module from "./example"

let module = null;
let nativeWadus = () => {};

const waitForNative = async () => {
  module = await Module();

  nativeWadus = module.native_wadus;
}

export {
  waitForNative,
  nativeWadus
};
