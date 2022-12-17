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
    correct: "a",
  },
  {
    question: "What was the name of Dr. Ambedkar's father?",
    a: "Ramji Maloji Sakpal",
    b: "Sambha ji Sakpal",
    c: "Yashwant Sambha Ambedkar",
    d: "None of these",
    correct: "a",
  },
  {
    question: "When was Dr. Ambedkar given Bharat Ratna?",
    a: "1980",
    b: "1990",
    c: "1985",
    d: "1979",
    correct: "b",
  },
  {
    question: "What is the name of Dr. Ambedkar's memorial site?",
    a: "Samta sthal",
    b: "Chaityabhoomi",
    c: "Buddhist bhumi",
    d: "Deekshabhoomi",
    correct: "b",
  },
  {
    question:
      "Dr. Ambedkar was the chairman of which committee constituted to form the Indian Constitution?",
    a: "Preamble committee",
    b: "Drafting committee",
    c: "Flag committee",
    d: "Union constiitution committee",
    correct: "b",
  },
  {
    question:
      "Which of the following books has not been written by Dr. Ambedkar?",
    a: "Thoughts on Pakistan",
    b: "Annihilation of caste",
    c: "The problem of Rupee",
    d: "Gandhi, Nehru and Tagore",
    correct: "d",
  },
  {
    question:
      "Which of the following magazine was not launched by Dr. Ambedkar?",
    a: "Mooknayak",
    b: "Bahishkrit Bharat",
    c: "Prabuddh Bharat",
    d: "Saraswati",
    correct: "d",
  },
  {
    question:
      "Which of the following political parties has not been formed by Dr. Ambedkar?",
    a: "Republican Party Of India",
    b: "Indian Labour Party",
    c: "Scheduled Caste Federation",
    d: "Socialist party of India",
    correct: "d",
  },
  {
    question:
      "In which year did Dr Ambedkar convert to Buddhism along with his lakhs of followers?",
    a: "1949",
    b: "1951",
    c: "1956",
    d: "1948",
    correct: "c",
  },
  {
    question: "Which book is considered as the Magmum Opus of Dr Ambedkar?",
    a: "THe Buddha And His Dhamma",
    b: "Revolution And Counter-Revolution",
    c: "Riddles in Hinduism",
    d: "State And Minorities",
    correct: "a",
  },
];

let score = 0;
// let currentQuiz = 0;
let index = 0;

function deselectAns() {
  answerEls.forEach((answerEL) => {
    answerEL.checked = false;
  });
}

function selectAns() {
  let answer;
  answerEls.forEach((answerEL) => {
    if (answerEL.checked) {
      answer = answerEL.id;
    }
  });
  return answer;
}

function randomUniqueNum(range, count) {
  // let randomNum;
  let nums = new Set();
  while (nums.size < count) {
    nums.add(Math.floor(Math.random() * range + 1));
  }
  let arrOfNums = Array.from(nums);
  return arrOfNums;
}
const randomQuestionIndex = randomUniqueNum(quizData.length - 1, 5);
console.log(randomQuestionIndex);

function loadPage() {
  deselectAns();

  const currentQuestionIndex = randomQuestionIndex[index];
  console.log(currentQuestionIndex);
  const currentQuizData = quizData[currentQuestionIndex];

  question.innerText = currentQuizData.question;
  opt1.innerText = currentQuizData.a;
  opt2.innerText = currentQuizData.b;
  opt3.innerText = currentQuizData.c;
  opt4.innerText = currentQuizData.d;
}
loadPage();

submitButton.addEventListener("click", function () {
  // console.log(randomNumber());
  const answer = selectAns();

  if (answer) {
    let cuurentRandomIndex = randomQuestionIndex[index];
    if (answer === quizData[cuurentRandomIndex].correct) {
      score = score + 1;
    } else {
      score;
    }
    index++;
    if (index < 5) {
      loadPage();
    } else {
      output.innerHTML = `<h2>Jai Bhim! You answered correctly at ${score}/5 questions.</h2>
      
      <button onclick="location.reload()">Play Again</button>`;
    }
  }
});
