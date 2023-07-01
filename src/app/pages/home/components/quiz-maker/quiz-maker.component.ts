import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Category} from "../../../../models/category";
import {QuestionService} from "../../../../services/question.service";
import {QuestionPlay} from "../../../../models/question-play";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-quiz-maker',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './quiz-maker.component.html',
  styleUrls: ['./quiz-maker.component.scss']
})

export class QuizMakerComponent implements OnInit{
  @Input() categories!: Category[];
  @Output() sendQuestions: EventEmitter<QuestionPlay[]> = new EventEmitter<QuestionPlay[]>();
  quizForm!:FormGroup;


  constructor(private questionService: QuestionService,
              private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.quizForm = this.initForm();
  }
  initForm():FormGroup{
   return this.fb.group({
      categorySelect:['-1', Validators.required],
      difficultySelect:['-1',Validators.required]
    })
  }
  onSubmit(){
    this.createQuiz();
  }

  checkForm(){
    return !this.quizForm.valid ||
    this.quizForm.controls['categorySelect'].value == -1 ||
    this.quizForm.controls['difficultySelect'].value == -1 ;
  }

  createQuiz() {
    this.questionService.getQuestions(
      this.quizForm.controls['categorySelect'].value,
      this.quizForm.controls['difficultySelect'].value).subscribe(response=>{
         this.sendQuestions.emit(response);
    })
  }

}
