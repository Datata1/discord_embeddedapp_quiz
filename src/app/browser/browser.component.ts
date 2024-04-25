import { Component, EventEmitter, Output } from '@angular/core';

import {Quiz} from '../shared/quiz';
import{QuizesService} from '../shared/quizes.service';


@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrl: './browser.component.css'
})
export class BrowserComponent {
  quizes: Quiz[] = [];
  @Output() selectQuiz = new EventEmitter<Quiz>();

  constructor(private service: QuizesService) {
    this.quizes = this.service.getAll();
  }

  doSelect(quiz: Quiz) {
    this.selectQuiz.emit(quiz);
  }
}
