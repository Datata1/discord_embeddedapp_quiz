import { Injectable } from '@angular/core';

import {Quiz} from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizesService {
  private quizes: Quiz[] = [];

  constructor() { 
    this.quizes = [
        {
          title: 'Flags of the World',
          description: 'This is a quiz to test your knowledge about flags.',
          quizPicture: 'assets/flagquiz.jpeg',
          questions: [
            {
              question: 'Which flag is this?',
              picture: 'assets/flags/france.webp',
              options: ['USA', 'India', 'France', 'Ireland'],
              answer: 'France'
            },
            {
              question: 'Which flag is this?',
              picture: 'assets/flags/newzealand.png',
              options: ['Australia', 'New-Zealand', 'Fiji', 'Samoa'],
              answer: 'New-Zealand'
            }
          ]
        },
        {
          title: 'Fruit, nut or someting else?',
          description: 'Did you know that strawberries are actually nuts? Botanically, the fruits we know are sometimes not fruits at all. Test your knowledge or learn something new!',
          quizPicture: 'assets/fruitquiz.jpeg',
          questions: [
            {
              question: 'Is a strawberry a fruit or a nut?',
              options: ['Fruit', 'Nut', 'legume', 'Berry'],
              answer: 'Fruit'
            },
            {
              question: 'Is a peanut a fruit or a nut?',
              options: ['Fruit', 'Nut', 'legume', 'Berry'],
              answer: 'legume'
            }
          ] 
        },
        {
          title: 'Programming quiz',
          description: 'Test your knowledge about programming languages and concepts.',
          quizPicture: 'assets/quizprogramming.jpeg',
          questions: [
            {
              question: 'What is an integer?',
              options: ['A number without a decimal point', 'A number with a decimal point', 'A string', 'A boolean'],
              answer: 'A number without a decimal point'
            },
            {
              question: 'is python compiled or interpreted?',
              options: ['Compiled', 'Interpreted'],
              answer: 'Interpreted'
            }
          ]
        }
      ];
  }

  getAll(): Quiz[] {
    return this.quizes;
  }
}
