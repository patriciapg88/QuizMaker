import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {QuizMakerComponent} from "./components/quiz-maker/quiz-maker.component";
import {QuizPlayerComponent} from "./components/quiz-player/quiz-player.component";
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";
import {QuestionPlay} from "../../models/question-play";
import {QuestionService} from "../../services/question.service";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports:[CommonModule, QuizMakerComponent, QuizPlayerComponent, RouterModule]
})

export class HomeComponent implements OnInit{
  categories: Category[]=[];
  questions: QuestionPlay[]=[];

  constructor(private categoryService : CategoryService,
              private questionService: QuestionService,
              private router: Router) {
  }


  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response =>{
      this.categories = response;
    })
  }

  emitQuestions(questionsPlayed: QuestionPlay[]) {
    this.questions = questionsPlayed;
  }

  submitAnswers(){
    this.questionService.questionPlayed = this.questions;
    this.router.navigate(['/results']);
  }
}
