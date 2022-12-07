export enum Direction {
  North = 'north',
  South = 'south',
  East = 'east',
  West = 'west'
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
    if (this.direction === Direction.South) this.position.y++;
    else this.position.y--;
  }

  turnLeft() {
    const turnLeftMapper = {
      [Direction.North]: Direction.West,
      [Direction.South]: Direction.East,
      [Direction.East]: Direction.North, 
      [Direction.West]: Direction.South
    }

    this.direction = turnLeftMapper[this.direction];
  }

  turnRight() {
    const turnRightMapper = {
      [Direction.North]: Direction.East,
      [Direction.South]: Direction.West,
      [Direction.East]: Direction.South, 
      [Direction.West]: Direction.North
    }

    this.direction = turnRightMapper[this.direction];
  }
}