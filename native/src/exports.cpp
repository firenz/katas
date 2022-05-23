#include <emscripten/bind.h>
#include "example.h"

using namespace emscripten;

std::string native_wadus() {
    return wadus();
}

EMSCRIPTEN_BINDINGS(example) {
    function("native_wadus", &native_wadus);
}

int main() { return 0; }
