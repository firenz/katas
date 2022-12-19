import { BowlingGame } from "./bowling-game";


describe("Bowling game kata", () => {
  it("counts pins down in a roll", () => {
    const pinsDown = 6;
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(pinsDown);
    expect(bowlingGame.rolls[0]).toEqual(6);
  });
});