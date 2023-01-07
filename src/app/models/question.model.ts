export class Question {
  id!: number;
  question!: string;
  type!: string;
  speed!: boolean;
  corrected!: boolean;
  group?: number;

  proposition1?: string;
  proposition2?: string;
  proposition3?: string;
  proposition4?: string;
  proposition5?: string;
  proposition6?: string;

  answer!: string;
  points!: number;
}
