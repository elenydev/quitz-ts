import React from 'react';
import styled from 'styled-components';

import {
  Box,
  Button,
  FormLabel,
  Input,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
} from '@material-ui/core';

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

  .MuiBox-root {
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

const AddQuestion = () => (
  <Wrapper>
    <form>
      <QuestionBox>
        <Box>
          <FormLabel>
            <Input type="text" name="question" placeholder="Question" />
          </FormLabel>
        </Box>
      </QuestionBox>

      <FormWrapper>
        <InputsContainer>
          <Box>
            <FormLabel>
              <Input type="text" name="answer1" placeholder="1. Answer" />
            </FormLabel>
          </Box>

          <Box>
            <FormLabel>
              <Input type="text" name="answer2" placeholder="2. Answer" />
            </FormLabel>
          </Box>

          <Box>
            <FormLabel>
              <Input type="text" name="answer1" placeholder="3. Answer" />
            </FormLabel>
          </Box>

          <Box>
            <FormLabel>
              <Input type="text" name="answer1" placeholder="4. Answer" />
            </FormLabel>
          </Box>
        </InputsContainer>

        <>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="gender"
              name="correctAnswer"
              // value={value}
              // onChange={handleChange}
            >
              <FormControlLabel value="1" control={<Radio />} />
              <FormControlLabel value="2" control={<Radio />} />
              <FormControlLabel value="3" control={<Radio />} />
              <FormControlLabel value="4" control={<Radio />} />
            </RadioGroup>
          </FormControl>
        </>
      </FormWrapper>
      <Button variant="contained" color="secondary">
        Add
      </Button>
    </form>
  </Wrapper>
);

export default AddQuestion;
