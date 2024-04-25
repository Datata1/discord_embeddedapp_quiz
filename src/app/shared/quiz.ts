import { Question } from './question';  

export interface Quiz {
    title: string;
    description: string;
    quizPicture: string;
    questions: Question[];
  }
