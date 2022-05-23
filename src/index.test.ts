import { wadus } from "./index"
import { waitForNative, nativeWadus } from "./example.bind"

describe("Wadus", () => {
  beforeAll(async () => {
    await waitForNative();
  });

  it("returns 'wadus'", () => {
    const expected = "wadus";

    const result = wadus();
    const nativeResult = nativeWadus();

    expect(result).toEqual(expected);
    expect(nativeResult).toEqual(expected);
  })
})
