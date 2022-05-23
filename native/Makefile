all: example

example:
	@mkdir -p build
	@cd build && cmake .. && make && cd ..
	@emcc -lembind --bind src/example.cpp src/exports.cpp -s MODULARIZE=1 -O0 -o build/example.js

test: example
	@find build -name "test_*" -type f -perm +111 -print0 | xargs -0 -I % sh -c %

clean:
	@rm -rf build
	@rm -rf *.dSYM

.PHONY: clean example
