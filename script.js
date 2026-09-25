const questions = [
    {
        question: "What is HTML?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },

    {
        question: "What is CSS used for?",
        answers: [
            "Creating databases",
            "Styling web pages",
            "Writing server code",
            "Managing files"
        ],
        correct: 1
    },

    {
        question: "What does JavaScript add to a website?",
        answers: [
            "Interactivity",
            "Only colors",
            "Only images",
            "Only text"
        ],
        correct: 0
    }
];


let currentQuestion = 0;
let score = 0;
let answered = false;


const questionElement = document.getElementById("question");
const scoreElement = document.getElementById("score");
const questionNumber = document.getElementById("question-number");
const infoElement = document.getElementById("inf");
const nextButton = document.getElementById("next");
const progress = document.getElementById("progress");

const answerButtons = document.querySelectorAll(".answer");


function showQuestion() {

    const question = questions[currentQuestion];

    questionElement.textContent = question.question;

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    scoreElement.textContent =
        `Score: ${score}`;

    infoElement.textContent = "";

    answered = false;

    nextButton.disabled = true;
    nextButton.textContent = "Next";

    const progressPercent =
        ((currentQuestion + 1) / questions.length) * 100;

    progress.style.width = `${progressPercent}%`;


    answerButtons.forEach((button, index) => {

        button.textContent = question.answers[index];

        button.disabled = false;

        button.classList.remove("correct");
        button.classList.remove("wrong");
    });
}


answerButtons.forEach((button) => {

    button.addEventListener("click", () => {

        if (answered) {
            return;
        }

        answered = true;

        const selectedAnswer =
            Number(button.dataset.index);

        const correctAnswer =
            questions[currentQuestion].correct;


        
        if (selectedAnswer === correctAnswer) {

            score++;

            button.classList.add("correct");

            infoElement.textContent =
                "Correct!";

        } else {

            button.classList.add("wrong");

            infoElement.textContent =
                "Wrong answer!";

            answerButtons[correctAnswer].classList.add("correct");
        }


        scoreElement.textContent =
            `Score: ${score}`;
        answerButtons.forEach((btn) => {
            btn.disabled = true;
        });
        nextButton.disabled = false;
    });
});

nextButton.addEventListener("click", () => {

    if (currentQuestion >= questions.length - 1) {

        showResult();

        return;
    }


    currentQuestion++;

    showQuestion();
});
function showResult() {

    questionElement.textContent =
        "Quiz Complete!";

    questionNumber.textContent =
        "Finished";

    scoreElement.textContent =
        `Final Score: ${score}/${questions.length}`;

    infoElement.textContent =
        getResultMessage();

    document.querySelector(".answers").style.display =
        "none";

    progress.style.width = "100%";

    nextButton.textContent = "Restart";

    nextButton.disabled = false;
    nextButton.onclick = restartQuiz;
}
function getResultMessage() {

    const percentage =
        (score / questions.length) * 100;

    if (percentage === 100) {

        return "Perfect score! ";

    } else if (percentage >= 70) {

        return "Great job! ";

    } else if (percentage >= 50) {

        return "Good effort! Keep practicing. ";

    } else {

        return "Keep learning and try again! ";
    }
}
function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    document.querySelector(".answers").style.display =
        "flex";

    nextButton.textContent = "Next";

    nextButton.onclick = null;

    showQuestion();
}
showQuestion();