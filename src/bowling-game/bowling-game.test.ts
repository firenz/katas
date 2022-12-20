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

    expect(bowlingGame.frame[0]).toBe(6);
  });

  it("get score from multiple frames", () => {
    const pinsDown = 3;
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(pinsDown);
    bowlingGame.roll(pinsDown);
    bowlingGame.roll(pinsDown);
    bowlingGame.roll(pinsDown);
    bowlingGame.roll(pinsDown);

    expect(bowlingGame.frame[0]).toBe(6);
    expect(bowlingGame.frame[1]).toBe(6);
  });

  it("get score from 10 frames (full game) rolling 3 pins each time", () => {
    const pinsDown = 3;
    const bowlingGame = new BowlingGame();

    for (let i = 0; i < FRAMES_IN_FULL_GAME * ROLLS_IN_FRAME; i++) {
      bowlingGame.roll(pinsDown);
    }

    for (let i = 0; i < FRAMES_IN_FULL_GAME; i++) {
      expect(bowlingGame.frame[i]).toBe(6);
    }

    expect(bowlingGame.score).toBe(60);
  });

  it("get score from 10 frames (full game) rolling 4 pins each time", () => {
    const pinsDown = 4;
    const bowlingGame = new BowlingGame();

    for (let i = 0; i < FRAMES_IN_FULL_GAME * ROLLS_IN_FRAME; i++) {
      bowlingGame.roll(pinsDown);
    }

    for (let i = 0; i < FRAMES_IN_FULL_GAME; i++) {
      expect(bowlingGame.frame[i]).toBe(8);
    }

    expect(bowlingGame.score).toBe(80);
  });
});