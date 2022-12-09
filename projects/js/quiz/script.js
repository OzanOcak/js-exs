const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerContainer = document.getElementById("answer-buttons-elements");

let shuffleQuestions,
  currentQuestionIndex = 0;

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener("click", () => {
  ++currentQuestionIndex;
  setNextQuestion();
});

function startGame() {
  startBtn.classList.add("hide");
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);
  questionContainer.classList.remove("hide");
  setNextQuestion();
}
function setNextQuestion() {
  resetState();
  showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion(currQuestion) {
  questionElement.innerHTML = currQuestion.question;
  currQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
    console.log("...");
    answerContainer.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerContainer.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  nextBtn.classList.remove("hide");
  if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextBtn.classList.remove("hide");
  } else {
    startBtn.innerText = "restart";
    startBtn.classList.remove("hide");
    nextBtn.classList.add("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function resetState() {
  nextBtn.classList.add("hide");
  while (answerContainer.firstChild) {
    answerContainer.removeChild(answerContainer.firstChild);
  }
}

const questions = [
  {
    question: "What is 7*5 ?",
    answers: [
      { text: "4", correct: false },
      { text: "54", correct: false },
      { text: "35", correct: true },
      { text: "62", correct: false },
    ],
  },
  {
    question: "What is 8*7 ?",
    answers: [
      { text: "4", correct: false },
      { text: "56", correct: true },
      { text: "35", correct: false },
      { text: "44", correct: false },
    ],
  },
  {
    question: "What is 6*4 ?",
    answers: [
      { text: "4", correct: false },
      { text: "54", correct: false },
      { text: "35", correct: false },
      { text: "24", correct: true },
    ],
  },
];
