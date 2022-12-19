export class BowlingGame {
  rolls: number[] = [];
  frame: number[] = [];

  roll(pins: number) {
    this.rolls.push(pins);

    if (this.isFrameFinished()) this.addFrameScore();
  }

  private isFrameFinished(): boolean {
    return this.rolls.length % 2 === 0;
  }

  private addFrameScore() {
    const lastRoll = this.rolls[this.rolls.length - 1];
    const secondToLastRoll = this.rolls[this.rolls.length -2];
    
    this.frame.push(secondToLastRoll + lastRoll);
  }
};