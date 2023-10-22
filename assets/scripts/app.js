import { questions } from "./questions.js";
console.log("questions: ", questions);

const MAX_SCORE = questions.length;
let score = 0;
let currentQuestion = {
  question: "Empty?",
  options: ["Option", "Option", "Option", "Option"],
  answer: "Answer",
};
console.log("currentQuestion: ", currentQuestion);

/**
 * retrieve a random question from questions array
 * @returns question object
 * @usecase `currentQuestion = getQuestion()`
 */
function getQuestion() {
  // todo: eliminate recurrence
  return questions[Math.floor(Math.random() * questions.length)];
}

function updateQuestionUI() {
  // fill the placeholders of question with the current question
}
getQuestion();
console.log("getQuestion(): ", getQuestion());
