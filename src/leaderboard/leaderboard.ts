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

export const generateLeaderboard = (
  players: PlayerScore[],
  sortingMethod: (a: PlayerScore, b: PlayerScore) => number = orderByHighestScore
): PlayerRank[] => {
  const playerRanks: PlayerRank[] = [];

  players.sort(sortingMethod).forEach((player, index) => {
    const previousPlayer = playerRanks[playerRanks.length - 1];
    const isSameScoreAsPrevious =
      previousPlayer !== undefined && previousPlayer.score === player.score;

    const rank: PlayerRank = {
      rank: isSameScoreAsPrevious ? previousPlayer.rank : index + 1,
      name: player.name,
      score: player.score,
    };

    playerRanks.push(rank);
  });

  return playerRanks;
};

export const orderByHighestScore = (a: PlayerScore, b: PlayerScore): number => {
  if (a.score > b.score) return -1;
  if (a.score < b.score) return 1;
  return orderByAlphabeticalOrder(a, b);
};

export const orderByLowestScore = (a: PlayerScore, b: PlayerScore): number => {
  if (a.score < b.score) return -1;
  if (a.score > b.score) return 1;
  return orderByAlphabeticalOrder(a, b);
};

export const orderByAlphabeticalOrder = (a: PlayerScore, b: PlayerScore): number => {
  return a.name.localeCompare(b.name);
};
