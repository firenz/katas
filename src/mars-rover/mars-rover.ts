export enum Direction {
  North,
  South,
  East,
  West
}

export class MarsRover {
  position: { x: number; y: number; };
  direction: Direction;
  
  constructor(positionX = 0, positionY = 0, direction = Direction.North) {
    this.position = {x: positionX, y: positionY};
    this.direction = direction;
  }

  forward() {
    this.position.y++;
  }

  backward() {
    this.position.y--;
  }

  turnLeft() {
    this.direction = Direction.West;
  }

  turnRight() {
    if(this.direction === Direction.West) this.direction = Direction.North;
    else  this.direction = Direction.East;
  }
}