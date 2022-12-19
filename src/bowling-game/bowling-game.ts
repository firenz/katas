export class BowlingGame {
  rolls: number[] = [];
  frame: number[] = [];

  roll(pins: number) {
    this.rolls.push(pins);

    if (this.rolls.length % 2 === 0) {
      const lastRoll = this.rolls[this.rolls.length - 1];
      const secondToLastRoll = this.rolls[this.rolls.length -2];
      
      this.frame.push(secondToLastRoll + lastRoll);
    }
  }
};