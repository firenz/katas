// https://github.com/ardalis/kata-catalog/blob/main/katas/Leaderboard.md

type PlayerScore = {
  name: string;
  score: number;
};

type PlayerRank = {
  rank: number;
  name: string;
  score: number;
};

export const generateLeaderboard = (players: PlayerScore[]): PlayerRank[] => {
  const playerRanks: PlayerRank[] = players.map((player) => {
    const rank: PlayerRank = {
      rank: 1,
      name: player.name,
      score: player.score,
    };
    return rank;
  });
  return playerRanks;
};
