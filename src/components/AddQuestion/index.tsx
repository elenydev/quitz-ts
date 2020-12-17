import React from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';

// eslint-disable-next-line import/extensions
import { DB_URL, QUESTION_DEFAULT_VALUES } from '@/helpers/constants.tsx';
import { AddQuestionFormData, Answer, Question } from '@/interfaces';
import {
  Box,
  Button,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@material-ui/core';
import ErrorInformation from '../ErrorInformation';

const Wrapper = styled.div`
  .MuiButton-containedSecondary {
    margin-top: 15px;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  .MuiFormControlLabel-root {
    margin: 0;
  }

  .MuiFormLabel-root {
    flex: 1;
  }
`;

const QuestionBox = styled.div`
  .MuiInput-root {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const addQuestion = async (question: Question, resetForm): Promise<void> => {
  try {
    await fetch(`${DB_URL}/questions/add`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(question),
    });
    resetForm();
  } catch (err) {
    throw new Error(`Something went wrong`);
  }
};

const addPointsToQuestions = (
  answers: string[],
  correctAnswer: number,
): Answer[] => {
  const answersArray: Answer[] = [];
  answers.forEach((answer) => {
    const answerObj = {
      answer,
      points: 0,
    };
    answersArray.push(answerObj);
  });
  answersArray[correctAnswer - 1].points = 1;
  return answersArray;
};

const AddQuestion = (): React.ReactNode => {
  const { register, handleSubmit, errors, reset, control } = useForm({
    defaultValues: QUESTION_DEFAULT_VALUES,
  });

  const onSubmit = handleSubmit((data: AddQuestionFormData): void => {
    const { question, correctAnswer, ...allAnswers } = data;
    const answers: string[] = Object.values(allAnswers);
    const answersArray = addPointsToQuestions(answers, correctAnswer);

    const questionObject: Question = {
      question,
      answers: answersArray,
    };
    addQuestion(questionObject, reset);
  });
  return (
    <Wrapper>
      <form onSubmit={onSubmit}>
        <QuestionBox>
          <Box>
            <FormLabel>
              <Input
                type="text"
                name="question"
                placeholder="Question"
                inputRef={register({
                  required: true,
                })}
              />
            </FormLabel>
          </Box>
        </QuestionBox>

        <FormWrapper>
          <InputsContainer>
            <FormLabel>
              <Input
                type="text"
                name="answer1"
                placeholder="1. Answer"
                inputRef={register({
                  required: true,
                })}
              />
            </FormLabel>

            <FormLabel>
              <Input
                type="text"
                name="answer2"
                placeholder="2. Answer"
                inputRef={register({
                  required: true,
                })}
              />
            </FormLabel>

            <FormLabel>
              <Input
                type="text"
                name="answer3"
                placeholder="3. Answer"
                inputRef={register({
                  required: true,
                })}
              />
            </FormLabel>

            <FormLabel>
              <Input
                type="text"
                name="answer4"
                placeholder="4. Answer"
                inputRef={register({
                  required: true,
                })}
              />
            </FormLabel>
          </InputsContainer>

          <>
            <Controller
              as={
                <RadioGroup aria-label="corectAnswer">
                  <FormControlLabel value="1" control={<Radio />} label="" />
                  <FormControlLabel value="2" control={<Radio />} label="" />
                  <FormControlLabel value="3" control={<Radio />} label="" />
                  <FormControlLabel value="4" control={<Radio />} label="" />
                </RadioGroup>
              }
              name="correctAnswer"
              control={control}
              rules={{ required: true }}
            />
          </>
        </FormWrapper>
        <Button variant="contained" color="secondary" type="submit">
          Add
        </Button>
      </form>
      {(errors.answer1 ||
        errors.answer2 ||
        errors.answer3 ||
        errors.answer4 ||
        errors.question ||
        errors.correctAnswer) && (
        <ErrorInformation>You must provide all fields</ErrorInformation>
      )}
    </Wrapper>
  );
};
export default AddQuestion;
