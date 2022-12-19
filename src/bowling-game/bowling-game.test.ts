import { BowlingGame } from "./bowling-game";


describe("Bowling game kata", () => {
  it("counts pins down in multiple rolls", () => {
    const pinsDown = 6;
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(pinsDown);
    bowlingGame.roll(pinsDown);
    bowlingGame.roll(pinsDown);
    expect(bowlingGame.rolls[0]).toEqual(6);
    expect(bowlingGame.rolls[1]).toEqual(6);
    expect(bowlingGame.rolls[2]).toEqual(6);
  });
});