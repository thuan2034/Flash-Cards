const flashCardData = [
  {
    id: 1,
    question: "What is JavaScript?",
    answer:
      "JavaScript is a programming language commonly used to create interactive effects within web browsers.",
  },
  {
    id: 2,
    question: "What are JavaScript data types?",
    answer:
      "JavaScript data types include Number, String, Boolean, Object, Undefined, Null, Symbol, and BigInt.",
  },
  {
    id: 3,
    question: "What is the difference between '==' and '===' in JavaScript?",
    answer:
      "'==' checks for equality with type coercion, while '===' checks for equality without type coercion.",
  },
  {
    id: 4,
    question: "What is a closure in JavaScript?",
    answer:
      "A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.",
  },
  {
    id: 5,
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    answer:
      "The 'this' keyword refers to the object it belongs to and its value depends on the context in which it is used.",
  },
  {
    id: 6,
    question: "What is an arrow function in JavaScript?",
    answer:
      "An arrow function is a shorter syntax for writing functions and does not have its own 'this' context.",
  },
  {
    id: 7,
    question: "What is the difference between 'var', 'let', and 'const'?",
    answer:
      "'var' is function-scoped, while 'let' and 'const' are block-scoped. 'const' is used for variables that should not be reassigned.",
  },
  {
    id: 8,
    question: "What is the event loop in JavaScript?",
    answer:
      "The event loop is a mechanism that handles the execution of asynchronous code in JavaScript.",
  },
  {
    id: 9,
    question: "What is the purpose of promises in JavaScript?",
    answer:
      "Promises are used to handle asynchronous operations and represent a value that may be available now, in the future, or never.",
  },
  {
    id: 10,
    question: "What is the difference between 'null' and 'undefined'?",
    answer:
      "'null' is an assigned value representing no value, while 'undefined' means a variable has been declared but not assigned a value.",
  },
];

const progessBar = document.querySelector("#progress");
const progressPercentage = document.querySelector("#progress-text");
const progressCount = document.querySelector("#total");
const questionElement = document.querySelector(".question");
const answerElement = document.querySelector(".answer");
const nextButton = document.querySelector("#next-btn");
const prevButton = document.querySelector("#prev-btn");
const showAnswerButton = document.querySelector("#show-answer-btn");

questionElement.textContent = flashCardData[0].question;
answerElement.textContent = flashCardData[0].answer;
let currentIndex = 0;
const totalCards = flashCardData.length;
progressPercentage.textContent = `${(currentIndex + 1)/totalCards * 100}%`;
progressCount.textContent = `${currentIndex + 1} of ${totalCards}`;
progessBar.style.width = `${(currentIndex + 1)/totalCards * 100}%`;
questionElement.style.display = "block";
answerElement.style.display = "none";

// Toggle between showing the question and the answer
showAnswerButton.addEventListener("click", () => {
  if (answerElement.style.display === "none") {
    // Flip to answer
    answerElement.style.display = "block";
    questionElement.style.display = "none";
    showAnswerButton.textContent = "Show Question";
  } else {
    // Flip back to question
    answerElement.style.display = "none";
    questionElement.style.display = "block";
    showAnswerButton.textContent = "Show Answer";
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
    questionElement.textContent = flashCardData[currentIndex].question;
    answerElement.textContent = flashCardData[currentIndex].answer;
    progressPercentage.textContent = `${(currentIndex + 1)/totalCards * 100}%`;
    progressCount.textContent = `${currentIndex + 1} of ${totalCards}`;
    progessBar.style.width = `${(currentIndex + 1)/totalCards * 100}%`;
  }
});

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    questionElement.textContent = flashCardData[currentIndex].question;
    answerElement.textContent = flashCardData[currentIndex].answer;
    progressPercentage.textContent = `${(currentIndex + 1)/totalCards * 100}%`;
    progressCount.textContent = `${currentIndex + 1} of ${totalCards}`;
    progessBar.style.width = `${(currentIndex + 1)/totalCards * 100}%`;
  }
});
