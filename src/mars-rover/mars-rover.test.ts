import { MarsRover, Direction } from "./mars-rover";

describe("Mars Rover kata", () => {
  it("has a starting position by default", () => {
    const marsRover = new MarsRover();

    expect(marsRover.position.x).toBe(0);
    expect(marsRover.position.y).toBe(0);
  });

  it("has a starting direction by default", () => {
    const marsRover = new MarsRover();

    expect(marsRover.direction).toBe(Direction.North);
  });

  it("is given a starting position and direction", () => {
    const positionX = 1;
    const positionY = 1;
    const direction = Direction.East;
    const marsRover = new MarsRover(positionX, positionY, direction);

    expect(marsRover.position.x).toBe(1);
    expect(marsRover.position.y).toBe(1);
    expect(marsRover.direction).toBe(Direction.East);
  });

  it("moves forward", () => {
    const marsRover = new MarsRover();
    marsRover.forward();

    expect(marsRover.position.x).toBe(0);
    expect(marsRover.position.y).toBe(1);
  });

  it("moves backward", () => {
    const marsRover = new MarsRover();
    marsRover.backward();

    expect(marsRover.position.x).toBe(0);
    expect(marsRover.position.y).toBe(-1);
  });

  it("turns left", () => {
    const marsRover = new MarsRover();
    marsRover.turnLeft();

    expect(marsRover.direction).toBe(Direction.East);
  });

  it("turns right", () => {
    const marsRover = new MarsRover();
    marsRover.turnRight();

    expect(marsRover.direction).toBe(Direction.West);
  });
})