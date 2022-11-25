export class MarsRover {
  position: { x: number; y: number; };
  
  constructor(positionX = 0, positionY = 0) {
    this.position = {x: positionX, y: positionY};
  }
}