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

// HTML elements
const quizDiv = document.querySelector(".quiz-area");
const questionElement = document.querySelector(".question");
const optionBtns = document.querySelectorAll(".option");

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
  questionElement.innerText = currentQuestion.question;
  let i = 0;
  optionBtns.forEach((btn) => {
    btn.innerText = currentQuestion.options[i++];
  });
}
currentQuestion = getQuestion();
console.log("currentQuestion: ", currentQuestion);
updateQuestionUI();

function checkAnswer(opt) {
  if (opt === currentQuestion.answer) return true;
  return false;
}

function optionHandler() {
  console.log("this.innerText: ", this.innerText);
  console.log(checkAnswer(this.innerText));
}

optionBtns.forEach((btn) => {
  btn.addEventListener("click", optionHandler);
});
