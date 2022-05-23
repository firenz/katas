Kata.ts + Native
================

Boilerplate for katas using WebAssembly, combining:

- Node
- Typescript
- Jest
- C++
- [Cest Framework](https://cestframework.com/)

## How it works

The code is split in two parts:
- Native code in C++, in `native/src/`
- TypeScript code, in `src/`

When running `npm test`, compilation proceeds as follows:
1. C++ tests are compiled and executed in the default architecture, following the rules in `native/CMakeLists.txt`
2. Native code is compiled as a WASM+JS bundle, exporting the functions defined in `native/src/exports.cpp`
3. Compiled WASM+JS bundle is copied to the TypeScript sources
4. TypeScript tests are run

In this sample, the native and TS code are performing the same task. The TS test imports the native code, and asserts that both versions present the same behavior.

## Required software packages

- Node
- Make
- CMake
- Emscripten
- Build essentials (clang++ or g++)

To install in macOS, install build essentials from XCode or the App Store, and then:

```
brew install cmake
brew install emscripten
```

To install in Linux (Ubuntu / Debian):
```
apt install build-essential
apt install make
apt install cmake
apt install emscripten
```

## Installation

Run: `npm install`

## Available commands

- Run tests: `npm run test`
