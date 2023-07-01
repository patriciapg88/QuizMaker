import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {QuestionPlay} from "../models/question-play";
import {QuestionResponse} from "../models/question-response";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  questionPlayed: QuestionPlay[]=[];
  constructor(private httpClient:HttpClient,
              ) { }
// https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple

  getQuestions(category:number, difficulty:string):Observable<QuestionPlay[]>{
    return this.httpClient.get<QuestionResponse>(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`)
      .pipe(map((response)=>{
        const questionPlay = response.results.map(item => {
          const play:QuestionPlay = {
            question:item,
            selected:'',
            answersAll: [item.correct_answer, ...item.incorrect_answers]
          }
          play.answersAll.sort((before,after)=> {
            return 0.5 - Math.random();
          });
          return play;
        })
      return questionPlay;
    }))
  }
}
