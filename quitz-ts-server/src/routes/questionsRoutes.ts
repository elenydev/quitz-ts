import express from "express";
import { fetchQuestions, addQuestion } from "../controllers/questions";
const router = express.Router();

router.use('/all', fetchQuestions)
router.use('/add', addQuestion)

export default router;
