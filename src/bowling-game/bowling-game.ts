export const ROLLS_IN_FRAME = 2;
export const FRAMES_IN_FULL_GAME = 10;

export class BowlingGame {
  rolls: number[] = [];
  frame: number[] = [];
  score: number = 30;

  roll(pins: number) {
    this.rolls.push(pins);

    if (this.isFrameFinished()) this.addFrameScore();
  }

  private isFrameFinished(): boolean {
    return this.rolls.length % ROLLS_IN_FRAME === 0;
  }

  private addFrameScore() {
    const lastRoll = this.rolls[this.rolls.length - 1];
    const secondToLastRoll = this.rolls[this.rolls.length - 2];
    
    this.frame.push(secondToLastRoll + lastRoll);
  }
};