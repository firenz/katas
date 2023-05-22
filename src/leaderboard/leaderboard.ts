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

export const generateLeaderboard = (players: PlayerScore[], sortByHighestScore: boolean = true): PlayerRank[] => {
  const sortMethod = sortByHighestScore ? orderByHighestScore : orderByLowestScore;

  const orderedPlayerScores = players.sort(sortMethod);
  const playerRanks: PlayerRank[] = [];

  for (let i = 0; i < orderedPlayerScores.length; i++) {
    const previousPlayer = playerRanks[playerRanks.length - 1];
    const currentPlayer = players[i];
    const isSameScoreAsPrevious =
      previousPlayer !== undefined &&
      previousPlayer.score === currentPlayer.score;

    const rank: PlayerRank = {
      rank: isSameScoreAsPrevious ? previousPlayer.rank : i + 1,
      name: currentPlayer.name,
      score: currentPlayer.score,
    };

    playerRanks.push(rank);
  }

  return playerRanks;
};

const orderByHighestScore = (a: PlayerScore, b: PlayerScore): number => {
  if (a.score > b.score) return -1;
  if (a.score < b.score) return 1;
  return orderByAlphabeticalOrder(a, b);
};

const orderByLowestScore = (a: PlayerScore, b: PlayerScore): number => {
  if (a.score < b.score) return -1;
  if (a.score > b.score) return 1;
  return orderByAlphabeticalOrder(a, b);
};

const orderByAlphabeticalOrder = (a: PlayerScore, b: PlayerScore): number => {
  return a.name.localeCompare(b.name);
};
