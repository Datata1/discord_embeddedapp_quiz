import { Component } from '@angular/core';
import { Quiz } from './shared/quiz';
import { Question } from './shared/question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  quiz: Quiz | null = null;
  question: Question | null = null;

  showbrowser() {
    this.quiz = null;
  }

  showDetails(quiz: Quiz) {
    this.quiz = quiz;
  }

  showQuestion(question: Question) {
    this.question = question;
  }

  showDetailsAgain() {
    this.question = null;
  }
}
