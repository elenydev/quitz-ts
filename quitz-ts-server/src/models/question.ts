import moongose from "mongoose";

const { Schema } = moongose;

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answers: {
    type: Array,
    required: true,
  },
});

export default moongose.model("Question", questionSchema);
