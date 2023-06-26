const quizData = [
    {
        question: "1. Who is the father of Computers?",
        a: " James Gosling",
        b: "Charles Babbage",
        c: "Dennis Ritchie",
        d: "Bjarne Stroustrup",
        correct: "b"
    },
    {
        question: "2. Which of the following is the correct abbreviation of COMPUTER?",
        a: "Commonly Occupied Machines Used in Technical and Educational Research",
        b: "Commonly Operated Machines Used in Technical and Environmental Research ",
        c: "Commonly Oriented Machines Used in Technical and Educational Research",
        d: "Commonly Operated Machines Used in Technical and Educational Research",
        correct: "d"
    },
    {
        question: "3. What is the full form of CPU?",
        a: "Creative Style Sheets",
        b: "Computer Processing Unit",
        c: "Central Processing Unit",
        d: "Control Processing Unit",
        correct: "c"
    },
    {
        question: "4. Which of the following is the smallest unit of data in a computer?",
        a: "Bit",
        b: "KB",
        c: "BYTE",
        d: "Firefox",
        correct: "a"
    },
    {
        question: "5. Which of the following is not a type of computer code?",
        a: "EDIC",
        b: "ASCII",
        c: "BCD",
        d: "EBCDIC",
        correct: "a"
    }
]
let question = document.getElementById("question");
let quizBox = document.getElementById("quiz-box");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");
let submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
loadQuiz();
function getSelected() {


    const answerElm = document.querySelectorAll(".answer");
    let answer = undefined;
    answerElm.forEach((answerEl) => {
        if (answerEl.checked === true) {
            answer = answerEl.id;
        }
    })
    return answer;

}
function deslected() {
    const answerElm = document.querySelectorAll(".answer");
    answerElm.forEach((answerEl) => {
        answerEl.checked = false;
    })
}

function loadQuiz() {
    deslected();
    const currentQuizData = quizData[currentQuiz];
    question.innerText = currentQuizData.question;
    option1.innerText = currentQuizData.a;
    option2.innerText = currentQuizData.b;
    option3.innerText = currentQuizData.c;
    option4.innerText = currentQuizData.d;

}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quizBox.innerHTML = `
                                <h2 class="result">You answered correctly at ${score}/${quizData.length} questions.</h2>
                                <button onclick="location.reload()">Reload</button>
                                `
        }
    }

})


