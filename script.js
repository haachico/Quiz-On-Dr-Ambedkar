const question = document.querySelector(".question");
const opt1 = document.querySelector(".opt-1");
const opt2 = document.querySelector(".opt-2");
const opt3 = document.querySelector(".opt-3");
const opt4 = document.querySelector(".opt-4");
const answerEls = document.querySelectorAll(".answer");
const submitButton = document.querySelector(".submit-btn");
const output = document.querySelector(".output");

const quizData = [
  {
    question: "When was Dr. Ambedkar born?",
    a: "14th April, 1891",
    b: "14th April, 1893",
    c: "11th April, 1890",
    d: "14th March, 1892",
    correct: "14th April, 1891",
  },
  {
    question: "What was the name of Dr. Ambedkar's father?",
    a: "Ramji Maloji Sakpal",
    b: "Sambha ji Sakpal",
    c: "Yashwant Sambha Ambedkar",
    d: "None of these",
    correct: "Ramji Maloji Sakpal",
  },
  {
    question: "When was Dr. Ambedkar given Bharat Ratna?",
    a: "1980",
    b: "1990",
    c: "1985",
    d: "1979",
    correct: "1990",
  },
  {
    question: "What is the name of Dr. Ambedkar's memorial site?",
    a: "Samta sthal",
    b: "Chaityabhoomi",
    c: "Buddhist bhumi",
    d: "Deekshabhoomi",
    correct: "Chaityabhoomi",
  },
];

let score = 0;
let currentQuiz = 0;

function deselectAns() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

function selectAns() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function loadQuiz() {
  deselectAns(); //Why is it called here???
  const currentQuizData = quizData[currentQuiz];
  question.innerText = currentQuizData.question;
  opt1.innerText = currentQuizData.a;
  opt2.innerText = currentQuizData.b;
  opt3.innerText = currentQuizData.c;
  opt4.innerText = currentQuizData.d;
}
loadQuiz();
submitButton.addEventListener("click", function () {
  const answer = selectAns();
  if (answer) {
    if (answer == quizData[currentQuiz].correct) {
      score = score + 1;
    } else {
      score = score;
    }
    currentQuiz++;
    console.log(currentQuiz);
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      output.innerText = `Your score is ${score}`;
    }
  }
});
