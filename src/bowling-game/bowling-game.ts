export const ROLLS_IN_FRAME = 2;
export const PINS_DOWN_FOR_SPARE = 10;
export const PINS_DOWN_FOR_STRIKE = 10;
export const FRAMES_IN_FULL_GAME = 10;

type FrameType = "normal" | "spare" | "strike";

class Frame {
  rolls: number[];
  bonusRollsNeeded: number = 0;
  score: number = 0;
  type: FrameType = "normal";

  constructor(rolls: number[]) {
    this.rolls = rolls;
    this.calculateFrameType();
    this.calculateBonusRollsFromFrameType();
  }

  private calculateFrameType() {
    if (this.rolls.length === 1) {
      this.type = "strike";
      return;
    }

    if (this.rolls[0] + this.rolls[1] === PINS_DOWN_FOR_SPARE) {
      this.type = "spare";
      return;
    }

    this.type = "normal";
  }

  private calculateBonusRollsFromFrameType() {
    this.bonusRollsNeeded =
      {
        strike: 2,
        spare: 1,
        normal: 0,
      }[this.type] || 0;
  }

  getRolls(): number[] {
    return this.rolls;
  }

  getBonusRollsNeeded(): number {
    return this.bonusRollsNeeded;
  }

  getType(): FrameType {
    return this.type;
  }

  getScore(): number {
    return this.score;
  }
}

export class BowlingGame {
  private totalFrames: number;
  private rolls: number[] = [];
  private frames: Frame[] = [];
  private score: number = 0;

  constructor(totalFrames: number = 10) {
    this.totalFrames = totalFrames;
  }

  roll(pins: number) {
    if (this.isGameFinished()) return;

    this.rolls.push(pins);

    if (this.isFrameFinished()) this.addFrame();
    if (this.isGameFinished()) this.calculateGameScore();
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
    let frame: Frame;
    const lastRoll = this.rolls[this.rolls.length - 1];

    if (this.isStrike(lastRoll)) {
      frame = new Frame([lastRoll]);
      this.frames.push(frame);
      return;
    }

    const secondToLastRoll = this.rolls[this.rolls.length - 2];
    frame = new Frame([secondToLastRoll, lastRoll]);
    this.frames.push(frame);
  }

  private calculateGameScore() {
    this.score = this.frames.reduce((accumulator, currentFrame, index) => {
      let score = currentFrame
        .getRolls()
        .reduce((accumulator, roll) => accumulator + roll, 0);

      const isLastFrame = index === this.frames.length - 1;
      if (isLastFrame) {
        return accumulator + score;
      }

      const bonusRollsNeeded = currentFrame.getBonusRollsNeeded();

      if (bonusRollsNeeded === 0) {
        return accumulator + score;
      }

      let nextRollIndex = 0;
      for (let i = 0; i <= index; i++) {
        nextRollIndex += this.frames[i].getRolls().length;
      }

      let bonusScore = this.rolls[nextRollIndex];
      if (bonusRollsNeeded === 2) {
        bonusScore += this.rolls[nextRollIndex + 1];
      }

      return accumulator + score + bonusScore;
    }, 0);
  }

  private isFrameFinished(): boolean {
    const lastRoll = this.rolls[this.rolls.length - 1];
    const totalRolls = this.rolls.length;
    const rollsInFrames = this.frames.reduce(
      (accumulator, currentFrame) =>
        accumulator + currentFrame.getRolls().length,
      0
    );

    if (this.isStrike(lastRoll) && totalRolls - rollsInFrames === 1)
      return true;
    else if (totalRolls - rollsInFrames === 2) return true;
    else return false;
  }

  private isGameFinished(): boolean {
    return this.frames.length === this.totalFrames;
  }

  private isStrike(roll: number) {
    return roll === PINS_DOWN_FOR_STRIKE;
  }
};