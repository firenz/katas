import { MarsRover } from "./mars-rover";

describe("Mars Rover kata", () => {
  it("is given an starting position", () => {
    const positionX = 0;
    const positionY = 0;
    const marsRover = new MarsRover(positionX, positionY);

    expect(marsRover.position.x).toBe(0)
    expect(marsRover.position.y).toBe(0);
  });
})