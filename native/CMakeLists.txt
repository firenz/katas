cmake_minimum_required(VERSION 3.5)

project(Example)

# Main definitions
set(CORE_INCLUDES
  ${PROJECT_SOURCE_DIR}/src
)

## Tests
set(TEST_INCLUDES
  ${CORE_INCLUDES}
  vendor/
)

set(TEST_CFLAGS
  -g -O0 --std=c++14 -Wno-writable-strings
)

add_executable(test_example
  src/example.cpp
  src/example.test.cpp
)

target_compile_options(test_example PRIVATE ${TEST_CFLAGS})
target_include_directories(test_example PRIVATE ${TEST_INCLUDES})
