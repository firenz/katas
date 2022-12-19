export class BowlingGame {
  rolls: number[] = [];

  roll(pins: number) {
    this.rolls.push(pins);
  }
};