import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { DB_URL, DUMMY_QUESTION } from '@/helpers/constants';
import { Question } from '@/interfaces';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  .MuiTypography-body1 {
    font-size: 0.8rem;
    white-space: normal;
  }

  & > fieldset,
  h4 {
    margin: 12px 0px;
  }
`;

interface Answer {
  answer: string;
  points: number;
}

const getQuizQuestions = async (): Promise<[] | Question[]> => {
  const request = await fetch(`${DB_URL}/questions/all`);
  const { questions } = await request.json();
  if (!questions) {
    return [];
  }
  return questions;
};

const formQuizQuestion = (question: string): string => {
  if (!question.includes(`?`)) {
    return `${question}?`;
  }
  return question;
};

const Quiz = (): React.ReactNode => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState<[] | Question[]>([]);
  const [answerValue, setAnswerValue] = useState<string>(null);
  const [currentAnswer, setCurrentAnswer] = useState<Answer>();
  const [allAnswers, setAllAnswers] = useState<Answer[]>([]);
  const { question, answers } = quizQuestions[currentQuestion]
    ? quizQuestions[currentQuestion]
    : DUMMY_QUESTION;
  const quizLength = quizQuestions.length;

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

  const getScore = (): string => {
    const score = allAnswers.filter((answer) => answer.points > 0);
    const finalScore = `${Math.floor((100 * score.length) / quizLength)} %`;
    return finalScore;
  };

  useEffect(() => {
    (async () => {
      const questions = await getQuizQuestions();
      setQuizQuestions(questions);
    })();
  }, []);

  return (
    <Wrapper>
      {quizQuestions.length > 1 &&
        (currentQuestion < quizLength ? (
          <>
            <Typography variant="h5">
              Question: {currentQuestion + 1} / {quizLength}
            </Typography>
            <FormControl component="fieldset">
              <Typography variant="h6" component="legend">
                {formQuizQuestion(question)}
              </Typography>
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
        ) : (
          <>
            <Typography variant="h3">Your score is:</Typography>
            <Typography variant="h4">{getScore()}</Typography>
            <Button variant="contained" color="secondary" onClick={restartQuiz}>
              Try again
            </Button>
          </>
        ))}
      {quizQuestions.length < 1 && (
        <Typography variant="h3">Loading questions...</Typography>
      )}
    </Wrapper>
  );
};

export default Quiz;
