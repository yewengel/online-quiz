console.log("Quiz application loaded");
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
    }
];

let currentQuestion = 0;
let score = 0;

console.log("Quiz questions loaded");
