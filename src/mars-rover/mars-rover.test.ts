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

  describe("moves forward", () => {
    it("moves forward", () => {
      const marsRover = new MarsRover();
      marsRover.forward();
      marsRover.forward();

      expect(marsRover.position.x).toBe(0);
      expect(marsRover.position.y).toBe(2);
    });

    it("moves forward to [0, 1] when facing North at [0, 0]", () => {
      const positionX = 0;
      const positionY = 0;
      const direction = Direction.North;
      const marsRover = new MarsRover(positionX, positionY, direction);
      marsRover.forward();
  
      expect(marsRover.position.x).toBe(0);
      expect(marsRover.position.y).toBe(1);
    });
  
    it("moves forward to [0, -1] when facing South at [0, 0]", () => {
      const positionX = 0;
      const positionY = 0;
      const direction = Direction.South;
      const marsRover = new MarsRover(positionX, positionY, direction);
      marsRover.forward();
  
      expect(marsRover.position.x).toBe(0);
      expect(marsRover.position.y).toBe(-1);
    });
  
    it("moves forward to [-1, 0] when facing West at [0, 0]", () => {
      const positionX = 0;
      const positionY = 0;
      const direction = Direction.West;
      const marsRover = new MarsRover(positionX, positionY, direction);
      marsRover.forward();
  
      expect(marsRover.position.x).toBe(-1);
      expect(marsRover.position.y).toBe(0);
    });
  
    it("moves forward to [1, 0] when facing East at [0, 0]", () => {
      const positionX = 0;
      const positionY = 0;
      const direction = Direction.East;
      const marsRover = new MarsRover(positionX, positionY, direction);
      marsRover.forward();
  
      expect(marsRover.position.x).toBe(1);
      expect(marsRover.position.y).toBe(0);
    });
  });

  describe("moves backwards", () => {
    it("moves backwards", () => {
      const marsRover = new MarsRover();
      marsRover.backward();
      marsRover.backward();

      expect(marsRover.position.x).toBe(0);
      expect(marsRover.position.y).toBe(-2);
    });

    it("moves backwards to [0, -1] when facing North at [0, 0]", () => {
      const positionX = 0;
      const positionY = 0;
      const direction = Direction.North;
      const marsRover = new MarsRover(positionX, positionY, direction);
      marsRover.backward();
  
      expect(marsRover.position.x).toBe(0);
      expect(marsRover.position.y).toBe(-1);
    });
  
    it("moves backwards to [0, 1] when facing South at [0, 0]", () => {
      const positionX = 0;
      const positionY = 0;
      const direction = Direction.South;
      const marsRover = new MarsRover(positionX, positionY, direction);
      marsRover.backward();
  
      expect(marsRover.position.x).toBe(0);
      expect(marsRover.position.y).toBe(1);
    });
  
    it("moves backwards to [-1, 0] when facing East at [0, 0]", () => {
      const positionX = 0;
      const positionY = 0;
      const direction = Direction.East;
      const marsRover = new MarsRover(positionX, positionY, direction);
      marsRover.backward();
  
      expect(marsRover.position.x).toBe(-1);
      expect(marsRover.position.y).toBe(0);
    });
  
    it("moves backwards to [1, 0] when facing West at [0, 0]", () => {
      const positionX = 0;
      const positionY = 0;
      const direction = Direction.West;
      const marsRover = new MarsRover(positionX, positionY, direction);
      marsRover.backward();
  
      expect(marsRover.position.x).toBe(1);
      expect(marsRover.position.y).toBe(0);
    });
  });

  describe("turns left", () => {
    it("turns left", () => {
      const marsRover = new MarsRover();
      marsRover.turnLeft();
      marsRover.turnLeft();
  
      expect(marsRover.direction).toBe(Direction.South);
    });

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

  it("can receive a string representing an array of commands to move forward", () => {
    const input = 'ff';
    const marsRover = new MarsRover();
    marsRover.command(input);

    expect(marsRover.position.x).toBe(0);
    expect(marsRover.position.y).toBe(2);
  });
})