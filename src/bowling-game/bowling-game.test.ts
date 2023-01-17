import { BowlingGame, FRAMES_IN_FULL_GAME, ROLLS_IN_FRAME } from "./bowling-game";


describe("Bowling game kata", () => {
  it("counts pins down in multiple rolls", () => {
    const bowlingGame = new BowlingGame();
    bowlingGame.roll(3);
    bowlingGame.roll(4);

    expect(bowlingGame.getRoll(0)).toBe(3);
    expect(bowlingGame.getRoll(1)).toBe(4);
  });

  it("get score from a frame", () => {
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(3);
    bowlingGame.roll(4);

    const frame = bowlingGame.getFrame(0);
    expect(bowlingGame.getRoll(0)).toBe(3);
    expect(bowlingGame.getRoll(1)).toBe(4);
    expect(frame.score).toBe(7);
    expect(frame.pinsDownOnFirstRoll).toEqual(3);
    expect(frame.pinsDownOnSecondRoll).toEqual(4);
  });

  it("get score from multiple frames", () => {
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(3);
    bowlingGame.roll(4);
    bowlingGame.roll(5);
    bowlingGame.roll(1);

    expect(bowlingGame.getFrame(0).score).toBe(7);
    expect(bowlingGame.getFrame(1).score).toBe(6);
    expect(bowlingGame.getScore()).toBe(13);
  });

  it("get score from 10 frames (full game)", () => {
    const pinsDown = 4;
    const bowlingGame = new BowlingGame();

    for (let i = 0; i < FRAMES_IN_FULL_GAME * ROLLS_IN_FRAME; i++) {
      bowlingGame.roll(pinsDown);
    }

    for (let i = 0; i < FRAMES_IN_FULL_GAME; i++) {
      expect(bowlingGame.getFrame(i).score).toBe(8);
    }

    expect(bowlingGame.getScore()).toBe(80);
  });

  it("detect is a frame is a spare", () => {
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(4);
    bowlingGame.roll(6);

    expect(bowlingGame.getFrame(0).type).toBe("spare");
  });

  it("detect is a frame is not a spare", () => {
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(3);
    bowlingGame.roll(6);

    expect(bowlingGame.getFrame(0).type).toBe("normal");
  });
});