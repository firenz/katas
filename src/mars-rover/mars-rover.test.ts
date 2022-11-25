import { MarsRover } from "./mars-rover";

describe("Mars Rover kata", () => {
  it("is given an starting position", () => {
    const marsRover = new MarsRover();

    expect(marsRover.position.x).toBe(0)
    expect(marsRover.position.y).toBe(0);
  });
})