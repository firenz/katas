import { BowlingGame, FRAMES_IN_FULL_GAME, ROLLS_IN_FRAME } from "./bowling-game";


describe("Bowling game kata", () => {
  it("counts pins down in multiple rolls", () => {
    const bowlingGame = new BowlingGame();
    bowlingGame.roll(3);
    bowlingGame.roll(4);

    expect(bowlingGame.getRun(0)).toBe(3);
    expect(bowlingGame.getRun(1)).toBe(4);
  });

  it("get score from a frame without spares and strikes", () => {
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(3);
    bowlingGame.roll(4);

    const frame = bowlingGame.getFrame(0);
    expect(bowlingGame.getRun(0)).toBe(3);
    expect(bowlingGame.getRun(1)).toBe(4);
    expect(frame.score).toBe(7);
    expect(frame.pinsDownOnFirstRoll).toEqual(3);
    expect(frame.pinsDownOnSecondRoll).toEqual(4);
  });

  it("get score from multiple frames without spares and strikes", () => {
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(3);
    bowlingGame.roll(4);
    bowlingGame.roll(5);
    bowlingGame.roll(1);

    expect(bowlingGame.getFrame(0).getScore()).toBe(7);
    expect(bowlingGame.getFrame(1).getScore()).toBe(6);
    expect(bowlingGame.getScore()).toBe(13);
  });

  it("get score from 10 frames without spares and strikes", () => {
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(1);
    bowlingGame.roll(2);

    bowlingGame.roll(3);
    bowlingGame.roll(4);

    bowlingGame.roll(3);
    bowlingGame.roll(1);

    bowlingGame.roll(7);
    bowlingGame.roll(2);

    bowlingGame.roll(8);
    bowlingGame.roll(1);

    bowlingGame.roll(9);
    bowlingGame.roll(0);

    bowlingGame.roll(6);
    bowlingGame.roll(2);

    bowlingGame.roll(4);
    bowlingGame.roll(5);

    bowlingGame.roll(4);
    bowlingGame.roll(4);

    bowlingGame.roll(0);
    bowlingGame.roll(0);

    expect(bowlingGame.getScore()).toBe(66);
  });

  it("detect is a frame is normal", () => {
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(3);
    bowlingGame.roll(6);

    expect(bowlingGame.getFrame(0).getType()).toBe("normal");
  });

  it("detect is a frame is a spare", () => {
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(4);
    bowlingGame.roll(6);

    expect(bowlingGame.getFrame(0).getType()).toBe("spare");
  });

  it("get score from a spare", () => {
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(4);
    bowlingGame.roll(6);
    bowlingGame.roll(5);
    bowlingGame.roll(3);

    const frame = bowlingGame.getFrame(0);
    expect(frame.getType()).toBe("spare");
    expect(frame.getScore()).toBe(15);
  });

  it("get score from 10 frames with one spare and no strikes", () => {
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(1);
    bowlingGame.roll(2);

    bowlingGame.roll(3);
    bowlingGame.roll(4);

    bowlingGame.roll(3);
    bowlingGame.roll(1);

    bowlingGame.roll(7);
    bowlingGame.roll(2);

    bowlingGame.roll(8);
    bowlingGame.roll(1);

    bowlingGame.roll(9);
    bowlingGame.roll(0);

    bowlingGame.roll(6);
    bowlingGame.roll(2);

    bowlingGame.roll(4);
    bowlingGame.roll(5);

    bowlingGame.roll(5);
    bowlingGame.roll(5);

    bowlingGame.roll(5);
    bowlingGame.roll(2);

    const spareFrame = bowlingGame.getFrame(8);
    expect(spareFrame.getScore()).toBe(15);
    expect(bowlingGame.getScore()).toBe(80);
  });
});