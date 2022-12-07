import { MarsRover, Direction } from "./mars-rover";

describe("Mars Rover kata", () => {
  it("starting position is [0, 0] by default", () => {
    const marsRover = new MarsRover();

    expect(marsRover.position.x).toBe(0);
    expect(marsRover.position.y).toBe(0);
  });

  it("direction is North by default", () => {
    const marsRover = new MarsRover();

    expect(marsRover.direction).toBe(Direction.North);
  });

  it("can be given a starting position and direction", () => {
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

  describe("turns left", () => {
    it("turns left to West when facing North", () => {
      const positionX = 0;
      const positionY = 0;
      const initialDirection = Direction.North;
      const marsRover = new MarsRover(positionX, positionY, initialDirection);
      marsRover.turnLeft();
  
      expect(marsRover.direction).toBe(Direction.West);
    });
  
    it("turns left to South when facing West", () => {
      const positionX = 0;
      const positionY = 0;
      const initialDirection = Direction.West;
      const marsRover = new MarsRover(positionX, positionY, initialDirection);
      marsRover.turnLeft();
  
      expect(marsRover.direction).toBe(Direction.South);
    });
  
    it("turns left to East when facing South", () => {
      const positionX = 0;
      const positionY = 0;
      const initialDirection = Direction.South;
      const marsRover = new MarsRover(positionX, positionY, initialDirection);
      marsRover.turnLeft();
  
      expect(marsRover.direction).toBe(Direction.East);
    });
  
    it("turns left to North when facing East", () => {
      const positionX = 0;
      const positionY = 0;
      const initialDirection = Direction.East;
      const marsRover = new MarsRover(positionX, positionY, initialDirection);
      marsRover.turnLeft();
  
      expect(marsRover.direction).toBe(Direction.North);
    });
  });

  describe("turns right", () => {
    it("turns right to East when facing North", () => {
      const positionX = 0;
      const positionY = 0;
      const initialDirection = Direction.North;
      const marsRover = new MarsRover(positionX, positionY, initialDirection);
      marsRover.turnRight();
  
      expect(marsRover.direction).toBe(Direction.East);
    });
  
    it("turns right to North when facing West", () => {
      const positionX = 0;
      const positionY = 0;
      const initialDirection = Direction.West;
      const marsRover = new MarsRover(positionX, positionY, initialDirection);
      marsRover.turnRight();
  
      expect(marsRover.direction).toBe(Direction.North);
    });
  
    it("turns right to South when facing East", () => {
      const positionX = 0;
      const positionY = 0;
      const initialDirection = Direction.East;
      const marsRover = new MarsRover(positionX, positionY, initialDirection);
      marsRover.turnRight();
  
      expect(marsRover.direction).toBe(Direction.South);
    });
  
    it("turns right to West when facing South", () => {
      const positionX = 0;
      const positionY = 0;
      const initialDirection = Direction.South;
      const marsRover = new MarsRover(positionX, positionY, initialDirection);
      marsRover.turnRight();
  
      expect(marsRover.direction).toBe(Direction.West);
    });
  });
})