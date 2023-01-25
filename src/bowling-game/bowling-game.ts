export const ROLLS_IN_FRAME = 2;
export const PINS_DOWN_FOR_SPARE = 10;
export const FRAMES_IN_FULL_GAME = 10;

type FrameType = "normal" | "spare";

class Frame {
  pinsDownOnFirstRoll: number;
  pinsDownOnSecondRoll: number;
  score: number;
  type: FrameType = "normal";

  constructor(pinsDownOnFirstRoll: number, pinsDownOnSecondRoll: number) {
    this.pinsDownOnFirstRoll = pinsDownOnFirstRoll;
    this.pinsDownOnSecondRoll = pinsDownOnSecondRoll;
    this.score = pinsDownOnFirstRoll + pinsDownOnSecondRoll;
    this.calculateFrameType();
  }

  private calculateFrameType() {
    if (
      this.pinsDownOnFirstRoll + this.pinsDownOnSecondRoll ===
      PINS_DOWN_FOR_SPARE
    ) {
      this.type = "spare";
    } else {
      this.type = "normal";
    }
  }

  updateScore(nextFrame: Frame) {
    if (this.type === "spare") this.score += nextFrame.pinsDownOnFirstRoll;
  }

  getType(): FrameType {
    return this.type;
  }

  getScore(): number {
    return this.score;
  }
}

export class BowlingGame {
  private rolls: number[] = [];
  private frames: Frame[] = [];
  private score: number = 0;

  roll(pins: number) {
    if (this.isGameFinished()) return;

    this.rolls.push(pins);

    if (this.isFrameFinished()) this.addFrame();
  }

  getRun(index: number): number {
    return this.rolls[index];
  }

  getFrame(index: number): Frame {
    return this.frames[index];
  }

  getScore(): number {
    return this.score;
  }

  private addFrame() {
    if (this.isGameFinished()) return;

    const lastRoll = this.rolls[this.rolls.length - 1];
    const secondToLastRoll = this.rolls[this.rolls.length - 2];

    const frame = new Frame(secondToLastRoll, lastRoll);
    this.frames.push(frame);
    this.updateFramesScore();
    this.calculateCurrentGameScore();
  }

  private updateFramesScore() {
    for (let i = 0; i < this.frames.length - 1; i++) {
      this.frames[i].updateScore(this.frames[i + 1]);
    }
  }

  private calculateCurrentGameScore() {
    this.score = this.frames.reduce(
      (accumulator, currentFrame) => accumulator + currentFrame.score,
      0
    );
  }

  private isFrameFinished(): boolean {
    return this.rolls.length % ROLLS_IN_FRAME === 0;
  }

  private isGameFinished(): boolean {
    return this.frames.length === FRAMES_IN_FULL_GAME;
  }
};