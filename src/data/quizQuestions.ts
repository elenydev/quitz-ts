interface Answer {
  answer: string;
  points: number;
}

interface Question {
  question: string;
  answers: Answer[];
}

export const QUIZ_QUESTIONS: Question[] = [
  {
    question: `How we get element from the DOM?`,
    answers: [
      {
        answer: `document.getSelectDocumentById('id')`,
        points: 0,
      },
      {
        answer: `document.getItembyId('id')`,
        points: 0,
      },
      {
        answer: `document.querySelector('.class')`,
        points: 1,
      },
      {
        answer: `document.getElementByid('#id')`,
        points: 0,
      },
    ],
  },
  {
    question: `Which tag is respossible for bolding the text?`,
    answers: [
      {
        answer: `<p></p>`,
        points: 0,
      },
      {
        answer: `<b></b>`,
        points: 1,
      },
      {
        answer: `<br></br>`,
        points: 0,
      },
      {
        answer: `<i></i>`,
        points: 0,
      },
    ],
  },
  {
    question: `How we can change the background color of div in pure css`,
    answers: [
      {
        answer: `Background: color`,
        points: 0,
      },
      {
        answer: `background-color: color`,
        points: 1,
      },
      {
        answer: `BgColor: color`,
        points: 0,
      },
      {
        answer: `color-background: color`,
        points: 0,
      },
    ],
  },
];
