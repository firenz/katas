export const ROLLS_IN_FRAME = 2;
export const PINS_DOWN_FOR_SPARE = 10;
export const FRAMES_IN_FULL_GAME = 10;

type Frame = {
  pinsDownOnFirstRoll: number;
  pinsDownOnSecondRoll: number;
  score: number;
  type: FrameType;
}

type FrameType = "normal" | "spare";

export class BowlingGame {
  private rolls: number[] = [];
  private frames: Frame[] = [];
  private score: number = 0;

  roll(pins: number) {
    if (this.isGameFinished()) return;

    this.rolls.push(pins);

    if (this.isFrameFinished()) this.addFrameScoreFromRoll();
  }

  getRoll(index: number): number {
    return this.rolls[index];
  }

  getFrame(index: number): Frame {
    return this.frames[index];
  }

  getScore(): number {
    return this.score;
  }

  private addFrameScoreFromRoll() {
    if (this.isGameFinished()) return;

    const lastRoll = this.rolls[this.rolls.length - 1];
    const secondToLastRoll = this.rolls[this.rolls.length - 2];
    
    this.setFrame(secondToLastRoll, lastRoll);
  }

  private setFrame(pinsDownOnFirstRoll: number, pinsDownOnSecondRoll: number) {
    this.rolls.push(pinsDownOnFirstRoll);
    this.rolls.push(pinsDownOnSecondRoll);

    const sumOfPins = pinsDownOnFirstRoll + pinsDownOnSecondRoll;
    const frameType = this.calculateFrameType(pinsDownOnFirstRoll, pinsDownOnSecondRoll);
    const frame: Frame = {
      pinsDownOnFirstRoll,
      pinsDownOnSecondRoll,
      score: sumOfPins, 
      type: frameType
    };

    if(frame.type === "spare") {
      frame.score = sumOfPins;
    }
    this.frames.push(frame);
    this.calculateScore();
  }

  private calculateFrameType(pinsDownOnFirstRoll: number, pinsDownOnSecondRoll: number): FrameType {
    if ((pinsDownOnFirstRoll + pinsDownOnSecondRoll) === PINS_DOWN_FOR_SPARE) {
      return "spare";
    }

    return "normal";
  }

  private isFrameFinished(): boolean {
    return this.rolls.length % ROLLS_IN_FRAME === 0;
  }

  private isGameFinished(): boolean {
    return this.frames.length === FRAMES_IN_FULL_GAME;
  }

  private calculateScore() {
    this.score = this.frames.reduce((accumulator, frame) => accumulator + frame.score, 0);
  }
};