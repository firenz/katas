export class BowlingGame {
  rolls: number[] = [];

  roll(pins: number) {
    this.rolls[0] = pins;
  }
};