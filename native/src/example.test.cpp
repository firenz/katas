#include <cest>
#include <example.h>

describe("wadus", []() {
  it("returns 'wadus'", []() {
    const auto expected = "wadus";

    const auto result = wadus();

    expect(result).toEqual(expected);
  });
});
