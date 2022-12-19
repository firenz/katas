export class BowlingGame {
  rolls: number[] = [];
  frame: number[] = [];

  roll(pins: number) {
    this.rolls.push(pins);

    if (this.rolls.length === 2) {
      this.frame[0] = this.rolls[0] + this.rolls[1];
    }
  }
};