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
    if(this.direction === Direction.South) this.position.y--;
    else this.position.y++;
  }

  backward() {
    switch(this.direction) {
      case Direction.North: this.position.y--; break;
      case Direction.South: this.position.y++; break;
      case Direction.East: this.position.x--; break;
      case Direction.West: this.position.x++; break;
    }
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