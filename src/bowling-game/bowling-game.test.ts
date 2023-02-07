import { BowlingGame } from "./bowling-game";

describe("Bowling game kata", () => {
  it("counts pins down in multiple rolls", () => {
    const bowlingGame = new BowlingGame(1);
    bowlingGame.roll(3);
    bowlingGame.roll(4);

    expect(bowlingGame.getRun(0)).toBe(3);
    expect(bowlingGame.getRun(1)).toBe(4);
  });

  it("get score from a frame without spares and strikes", () => {
    const bowlingGame = new BowlingGame(1);

    bowlingGame.roll(3);
    bowlingGame.roll(4);

    const frame = bowlingGame.getFrame(0);
    expect(frame.getRolls().length).toEqual(2);
    expect(frame.getRolls()[0]).toEqual(3);
    expect(frame.getRolls()[1]).toEqual(4);
    expect(bowlingGame.getRun(0)).toBe(3);
    expect(bowlingGame.getRun(1)).toBe(4);
    expect(bowlingGame.getScore()).toBe(7);
  });

  it("get score from multiple frames without spares and strikes", () => {
    const bowlingGame = new BowlingGame(2);

    bowlingGame.roll(3);
    bowlingGame.roll(4);
    bowlingGame.roll(5);
    bowlingGame.roll(1);

    expect(bowlingGame.getScore()).toBe(13);
  });

  it("detect frame is normal", () => {
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(3);
    bowlingGame.roll(6);

    expect(bowlingGame.getFrame(0).getType()).toBe("normal");
  });

  it("detect frame is a spare", () => {
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(4);
    bowlingGame.roll(6);

    expect(bowlingGame.getFrame(0).getType()).toBe("spare");
  });

  it("get score with one spare and no strikes that is not last frame", () => {
    const bowlingGame = new BowlingGame(2);

    bowlingGame.roll(4);
    bowlingGame.roll(6);
    bowlingGame.roll(5);
    bowlingGame.roll(3);

    const frame = bowlingGame.getFrame(0);
    expect(frame.getType()).toBe("spare");
    expect(bowlingGame.getScore()).toBe(23);
  });

  it("detect frame is a strike", () => {
    const bowlingGame = new BowlingGame();

    bowlingGame.roll(10);
    bowlingGame.roll(6);

    expect(bowlingGame.getFrame(0).getType()).toBe("strike");
    expect(bowlingGame.getFrame(0).getRolls().length).toBe(1);
    expect(bowlingGame.getFrame(0).getRolls()[0]).toBe(10);
  });

  it("get score with one strike and no spares that is not last frame", () => {
    const bowlingGame = new BowlingGame(2);

    bowlingGame.roll(10);
    bowlingGame.roll(3);
    bowlingGame.roll(5);

    const frame = bowlingGame.getFrame(0);
    expect(frame.getType()).toBe("strike");
    expect(bowlingGame.getScore()).toBe(26);
  });

  it("get score with one strike and one spare that aren't last frame", () => {
    const bowlingGame = new BowlingGame(3);

    bowlingGame.roll(10);
    bowlingGame.roll(6);
    bowlingGame.roll(4);
    bowlingGame.roll(3);
    bowlingGame.roll(5);

    const strikeFrame = bowlingGame.getFrame(0);
    const spareFrame = bowlingGame.getFrame(1);
    expect(strikeFrame.getType()).toBe("strike");
    expect(spareFrame.getType()).toBe("spare");
    expect(bowlingGame.getScore()).toBe(41);
  });

  it("get score with multiple strikes and spares that aren't last frame", () => {
    const bowlingGame = new BowlingGame(7);

    bowlingGame.roll(10);
    bowlingGame.roll(6);
    bowlingGame.roll(4);
    bowlingGame.roll(10);
    bowlingGame.roll(10);
    bowlingGame.roll(3);
    bowlingGame.roll(7);
    bowlingGame.roll(5);
    bowlingGame.roll(5);
    bowlingGame.roll(3);
    bowlingGame.roll(5);

    expect(bowlingGame.getScore()).toBe(119);
  });

  it("get score with spare in last frame", () => {
    const bowlingGame = new BowlingGame(1);

    bowlingGame.roll(6);
    bowlingGame.roll(4);
    bowlingGame.roll(3);

    expect(bowlingGame.getScore()).toBe(119);
  });
});
