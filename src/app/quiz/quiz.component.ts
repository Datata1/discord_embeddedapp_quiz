import { Component, Input, Output, EventEmitter, output } from '@angular/core';

import { Quiz } from '../shared/quiz';
import { Question } from '../shared/question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  question: Question|null = null;


  @Input() quiz?: Quiz;
  @Output() showBrowser = new EventEmitter<void>();
  @Output() selectQuestion = new EventEmitter<Question>();
  @Output() selectedQuiz = new EventEmitter<string>();

  doLeave() {
    this.showBrowser.emit();
  }

  toBrowser() {
    this.showBrowser.emit();
  }

  doSelect(question: Question) {
    this.selectQuestion.emit(question);
  }


}
