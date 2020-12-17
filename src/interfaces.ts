export interface Route {
  route: string;
  icon: React.ReactElement;
  destination: string;
}

export interface AddQuestionFormData {
  question: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  correctAnswer: number;
}

export interface Answer {
  answer: string;
  points: number;
}

export interface Question {
  question: string;
  answers: Answer[];
}
