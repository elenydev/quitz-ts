import { RequestHandler } from "express";
import Question from "../models/question";

export const fetchQuestions: RequestHandler = async (req, res, next) => {
  try {
    const questions = await Question.find();
    res.status(200).send({ questions });
  } catch (err) {
    res.status(404).send({ message: "Something went wrong, try again" });
  }
};

export const addQuestion: RequestHandler = async (req, res, next) => {
  const { question, answers } = req.body;
  try {
    const newQuestion = new Question({
      question,
      answers
    });
    await newQuestion.save()
    res.status(201).send({ message: "Succesfully added question " });
  } catch (err) {
    res.status(404).send({ message: "Something went wrong, try again" });
  }
};
