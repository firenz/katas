import { generateLeaderboard } from "./leaderboard";

describe("Leaderboard", () => {
  it("returns empty leaderboard if not given any players and scores", () => {
    const result = generateLeaderboard([]);

    expect(result.length).toBe(0);
  });

  it("returns a leaderboard given one player with score", () => {
    const playerScore = {
      name: "Scott Pilgrim",
      score: 10,
    };

    const result = generateLeaderboard([playerScore]);

    expect(result.length).toBe(1);
    expect(result[0].rank).toBe(1);
    expect(result[0].name).toBe("Scott Pilgrim");
    expect(result[0].score).toBe(10);
  });

  it("returns a leaderboard given different players with different scores", () => {
    const playerScore1 = {
      name: "Scott Pilgrim",
      score: 10,
    };
    const playerScore2 = {
      name: "Ramona Flowers",
      score: 9,
    };
    const playerScore3 = {
      name: "Knives Chau",
      score: 8,
    };

    const result = generateLeaderboard([
      playerScore1,
      playerScore2,
      playerScore3,
    ]);

    expect(result.length).toBe(3);
    const rank1 = result[0];
    expect(rank1.rank).toBe(1);
    expect(rank1.name).toBe("Scott Pilgrim");
    expect(rank1.score).toBe(10);
    const rank2 = result[1];
    expect(rank2.rank).toBe(2);
    expect(rank2.name).toBe("Ramona Flowers");
    expect(rank2.score).toBe(9);
    const rank3 = result[2];
    expect(rank3.rank).toBe(3);
    expect(rank3.name).toBe("Knives Chau");
    expect(rank3.score).toBe(8);
  });

  describe("Duplicates", () => {
    it("gives same rank to players that have the same score", () => {
      const playerScore1 = {
        name: "Scott Pilgrim",
        score: 10,
      };
      const playerScore2 = {
        name: "Kim Pine",
        score: 8,
      };
      const playerScore3 = {
        name: "Envy Adams",
        score: 8,
      };
  
      const result = generateLeaderboard([
        playerScore1,
        playerScore2,
        playerScore3,
      ]);
  
      expect(result.length).toBe(3);
      const rank1 = result[0];
      expect(rank1.rank).toBe(1);
      expect(rank1.name).toBe("Scott Pilgrim");
      expect(rank1.score).toBe(10);
      const rank2 = result[1];
      expect(rank2.rank).toBe(2);
      expect(rank2.name).toBe("Kim Pine");
      expect(rank2.score).toBe(8);
      const rank3 = result[2];
      expect(rank3.rank).toBe(2);
      expect(rank3.name).toBe("Envy Adams");
      expect(rank3.score).toBe(8);
    });

    it("player rank after duplicates is based on position in leaderboard, not in previous rank", () => {
      const playerScore1 = {
        name: "Scott Pilgrim",
        score: 10,
      };
      const playerScore2 = {
        name: "Kim Pine",
        score: 8,
      };
      const playerScore3 = {
        name: "Envy Adams",
        score: 8,
      };
      const playerScore4 = {
        name: "Knives Chau",
        score: 7,
      };
  
      const result = generateLeaderboard([
        playerScore1,
        playerScore2,
        playerScore3,
        playerScore4
      ]);
  
      expect(result.length).toBe(4);
      const rank1 = result[0];
      expect(rank1.rank).toBe(1);
      expect(rank1.name).toBe("Scott Pilgrim");
      expect(rank1.score).toBe(10);
      const rank2 = result[1];
      expect(rank2.rank).toBe(2);
      expect(rank2.name).toBe("Kim Pine");
      expect(rank2.score).toBe(8);
      const rank3 = result[2];
      expect(rank3.rank).toBe(2);
      expect(rank3.name).toBe("Envy Adams");
      expect(rank3.score).toBe(8);
      const rank4 = result[3];
      expect(rank4.rank).toBe(4);
      expect(rank4.name).toBe("Knives Chau");
      expect(rank4.score).toBe(7);
    });
  })
});
