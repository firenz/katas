import { generateLeaderboard } from "./leaderboard";

describe("Leaderboard", () => {
  it("returns empty leaderboard if not given any players and scores", () => {
    const result = generateLeaderboard([]);

    expect(result.length).toBe(0);
  });

  it("returns a leaderboard given one player with score", () => {
    const playerScore = {
      name: "Scott Pilgrim",
      score: 10
    }

    const result = generateLeaderboard([playerScore]);

    expect(result.length).toBe(1);
    expect(result[0].rank).toBe(1);
    expect(result[0].name).toBe("Scott Pilgrim");
    expect(result[0].score).toBe(10);
  });
});
