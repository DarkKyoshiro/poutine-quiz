export class Leaderboard {
    titre!: String;
    teams!: Array<{
        rang: number;
        nom: string;
        score: number;
      }>;
  }