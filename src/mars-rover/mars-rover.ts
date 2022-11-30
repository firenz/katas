export enum Direction {
  North,
  South,
  East,
  West
}

export class MarsRover {
  position: { x: number; y: number; };
  direction: Direction;
  
  constructor(direction = Direction.North, positionX = 0, positionY = 0) {
    this.position = {x: positionX, y: positionY};
    this.direction = direction;
  }
}