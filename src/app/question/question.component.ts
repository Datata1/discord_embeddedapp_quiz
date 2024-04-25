import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Question } from '../shared/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {


  @Input() question?: Question;
  @Input() picture?: string;
  @Output() getBack = new EventEmitter<void>();

  doLeave() {
    this.getBack.emit();
  }

  doAnswer(answer: string) {
    if (answer === this.question?.answer) {
      alert('Correct!');
    } else {
      alert('Incorrect!');
    }
  }

}
