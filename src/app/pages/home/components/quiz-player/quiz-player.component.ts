import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuestionPlay} from "../../../../models/question-play";

@Component({
  selector: 'app-quiz-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-player.component.html',
  styleUrls: ['./quiz-player.component.scss']
})
export class QuizPlayerComponent {
 @Input() questionsToPlay!:QuestionPlay[];
 @Output() completedQuiz:EventEmitter<void> = new EventEmitter<void>();

  incompletedQuiz(){
   return this.questionsToPlay.some((item)=>{
     return item.selected.length === 0
   });
  }

  selectAnswer(answer:string, indexQuestion: number, question:QuestionPlay) {
    question.selected = answer;
  }

  emitCompletedQuiz(){
   this.completedQuiz.emit();
  }

}
