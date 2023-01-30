export class Question {
  id!: number;
  type!: string;
  speed!: boolean;
  round!: number;
  group?: number;
  points!: number;

  title?: string;
  question!: string;
  questionComment?: string;
  propositionsDetailed?: string[];
  propositionsShort?: string[];
  answer!: string;
  answerComment?: string;


  showQuestion!: boolean;
  propositionsStep!: number;
  locked!: boolean;
  showAnswer!: boolean;
}
