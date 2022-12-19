import { BowlingGame } from "./bowling-game";


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
});