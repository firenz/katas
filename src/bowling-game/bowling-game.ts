export const ROLLS_IN_FRAME = 2;
export const FRAMES_IN_FULL_GAME = 10;

type Frame = {
  score: number;
  type: "spare";
}

export class BowlingGame {
  rolls: number[] = [];
  frames: Frame[] = [];
  score: number = 0;

  roll(pins: number) {
    this.rolls.push(pins);

    if (this.isFrameFinished()) this.addFrameScore();
    if (this.isGameFinished())  this.calculateScore();
  }

  private isFrameFinished(): boolean {
    return this.rolls.length % ROLLS_IN_FRAME === 0;
  }

  private addFrameScore() {
    if (this.isGameFinished()) return;

    const lastRoll = this.rolls[this.rolls.length - 1];
    const secondToLastRoll = this.rolls[this.rolls.length - 2];
    
    this.frames.push({ score: secondToLastRoll + lastRoll, type: "spare"});
  }

  private isGameFinished(): boolean {
    return this.frames.length === FRAMES_IN_FULL_GAME;
  }

  private calculateScore() {
    this.score = this.frames.reduce((accumulator, frame) => accumulator + frame.score, 0);
  }
};