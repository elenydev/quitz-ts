import React, { useState } from 'react';
import styled from 'styled-components';
import { QUIZ_QUESTIONS } from '@/data/quizQuestions';

import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

interface Answer {
  answer: string;
  points: number;
}

const DUMMY_QUESTION = {
  question: ``,
  answers: [],
};

const Quiz = (): React.ReactNode => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerValue, setAnswerValue] = useState<string>(null);
  const [currentAnswer, setCurrentAnswer] = useState<Answer>();
  const [allAnswers, setAllAnswers] = useState<Answer[]>([]);
  const { question, answers } = QUIZ_QUESTIONS[currentQuestion]
    ? QUIZ_QUESTIONS[currentQuestion]
    : DUMMY_QUESTION;
  const quizLength = QUIZ_QUESTIONS.length;

  const setNextQuestion = (): void => {
    setCurrentQuestion(currentQuestion + 1);
    setAllAnswers([...allAnswers, currentAnswer]);
    setAnswerValue(null);
    setCurrentAnswer(null);
  };

  const restartQuiz = (): void => {
    setCurrentQuestion(0);
    allAnswers.length = 0;
  };

  const handleAnswerValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setAnswerValue(event.target.value);
  };

  const handleCurrentAnswer = (answer: Answer): void =>
    setCurrentAnswer(answer);

  const getScore = (): number => {
    const score = allAnswers.filter((answer) => answer.points > 0);
    return score.length;
  };

  return (
    <Wrapper>
      {currentQuestion < quizLength && (
        <>
          <h2>
            Question: {currentQuestion + 1} / {quizLength}
          </h2>
          <FormControl component="fieldset">
            <FormLabel component="legend">{question}</FormLabel>
            <RadioGroup
              aria-label={question}
              name={question}
              value={answerValue}
              onChange={handleAnswerValue}
            >
              {answers.map((answer: Answer) => (
                <FormControlLabel
                  key={answer.answer}
                  value={answer.answer}
                  onClick={() => handleCurrentAnswer(answer)}
                  control={<Radio />}
                  label={answer.answer}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <Button
            variant="contained"
            color="secondary"
            onClick={setNextQuestion}
            disabled={!answerValue}
          >
            Next
          </Button>
        </>
      )}
      {currentQuestion >= quizLength && (
        <>
          <h3>Your score is:</h3>
          <h4>{`${Math.floor((100 * getScore()) / quizLength)} %`}</h4>
          <Button variant="contained" color="secondary" onClick={restartQuiz}>
            Try again
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Quiz;
