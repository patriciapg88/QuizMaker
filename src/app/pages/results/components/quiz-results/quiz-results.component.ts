import {Component, OnInit} from '@angular/core';
import {CommonModule } from '@angular/common';
import {QuestionService} from "../../../../services/question.service";
import {QuestionPlay} from "../../../../models/question-play";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-quiz-results',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './quiz-results.component.html',
  styleUrls: ['./quiz-results.component.scss']
})
export class QuizResultsComponent implements OnInit{
  results:QuestionPlay[]=[];
  score: number = 0;
  constructor(private questionService:QuestionService) {}

  ngOnInit(): void {
    this.results = this.questionService.questionPlayed;
    this.score = this.results
      .filter(question=> question.selected === question.question.correct_answer)
      .length;
  }
}
