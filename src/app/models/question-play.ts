import {Question} from "./question";

export interface QuestionPlay {
  question: Question;
  selected: string;
  answersAll: string[];
}
