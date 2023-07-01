import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {QuizResultsComponent} from "./components/quiz-results/quiz-results.component";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  standalone:true,
  imports:[CommonModule,QuizResultsComponent]
})
export class ResultsComponent{


}
