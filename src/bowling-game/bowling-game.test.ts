import { BowlingGame, FRAMES_IN_FULL_GAME, ROLLS_IN_FRAME } from "./bowling-game";


describe("Bowling game kata", () => {
  it("counts pins down in multiple rolls", () => {
    const pinsDown = 6;
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(pinsDown);
    bowlingGame.roll(pinsDown);
    bowlingGame.roll(pinsDown);

    expect(bowlingGame.rolls[0]).toBe(6);
    expect(bowlingGame.rolls[1]).toBe(6);
    expect(bowlingGame.rolls[2]).toBe(6);
  });

  it("get score from a frame", () => {
    const pinsDown = 3;
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(pinsDown);
    bowlingGame.roll(pinsDown);

    expect(bowlingGame.frames[0].score).toBe(6);
  });

  it("get score from multiple frames", () => {
    const pinsDown = 3;
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(pinsDown);
    bowlingGame.roll(pinsDown);
    bowlingGame.roll(pinsDown);
    bowlingGame.roll(pinsDown);
    bowlingGame.roll(pinsDown);

    expect(bowlingGame.frames[0].score).toBe(6);
    expect(bowlingGame.frames[1].score).toBe(6);
  });

  it("get score from 10 frames (full game)", () => {
    const pinsDown = 4;
    const bowlingGame = new BowlingGame();

    for (let i = 0; i < FRAMES_IN_FULL_GAME * ROLLS_IN_FRAME; i++) {
      bowlingGame.roll(pinsDown);
    }

    for (let i = 0; i < FRAMES_IN_FULL_GAME; i++) {
      expect(bowlingGame.frames[i].score).toBe(8);
    }

    expect(bowlingGame.score).toBe(80);
  });

  it("detect is a frame is a spare", () => {
    const pinsDownOnFirstRoll = 4;
    const pinsDownOnSecondRoll = 6;
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(pinsDownOnFirstRoll);
    bowlingGame.roll(pinsDownOnSecondRoll);

    expect(bowlingGame.frames[0].type).toBe("spare");
  });

  it("detect is a frame is not a spare", () => {
    const pinsDownOnFirstRoll = 3;
    const pinsDownOnSecondRoll = 6;
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(pinsDownOnFirstRoll);
    bowlingGame.roll(pinsDownOnSecondRoll);

    expect(bowlingGame.frames[0].type).toBe("normal");
  });
});