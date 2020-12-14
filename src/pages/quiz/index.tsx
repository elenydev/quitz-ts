import React, { useState } from 'react';
import styled from 'styled-components';
import { QUIZ_QUESTIONS } from '@/data/quizQuestions';

import Button from '@material-ui/core/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Quiz = (): React.ReactNode => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswer] = useState([]);

  const setNextQuestion = (): void => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const restartQuiz = (): void => {
    setCurrentQuestion(0);
  };

  return (
    <Wrapper>
      {currentQuestion <= QUIZ_QUESTIONS.length && (
        <>
          <h2>Quiz</h2>

          <Button
            variant="contained"
            color="secondary"
            onClick={setNextQuestion}
          >
            Next
          </Button>
        </>
      )}
      {currentQuestion > QUIZ_QUESTIONS.length && (
        <>
          <h3>Your score is:</h3>

          <Button variant="contained" color="secondary" onClick={restartQuiz}>
            Try again
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Quiz;
