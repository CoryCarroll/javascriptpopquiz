// Create my list of variables
var timerEl = document.getElementById('countdown');
var quiz = document.getElementById('quiz');
var startBtn = document.getElementById('start');
var result = document.getElementById('result');
var score = document.getElementById('score');
var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');
var quizSection = document.getElementById('quiz-section');
var initialsInput = document.getElementById('initials');
var msgDiv = document.getElementById('msg');
var submitBtn = document.getElementById('submit');
var points = 0;
var totalPoints;
var currentQuestion = 0;


// define timer starting point
var timeLeft = 60;

// Create an array of questions and answers Credit: https://www.sitepoint.com/simple-javascript-quiz/ used to create this array
var questions = [
    {
        q: "arrays in Javascript can be used to store ___",
        answers: {
            A: "numbers and strings", 
            B: "other arrays",
            C: "booleans", 
            D: "all of the above",
        },
        correctAnswer: "numbers and strings",
    },
    {
        q: "Commonly used data types DO NOT inclue:",
        answers: {
            A: "strings", 
            B: "booleans", 
            C: "alerts", 
            D:"numbers",
        },
        correctAnswer: "alerts",
    },
    {
        q: "The condition in an if/else statement is enclosed within ____",
        answers: {
            A: "quotes", 
            B: "curly brackets", 
            C: "parentheses", 
            D: "square brackets",
    },
        correctAnswer: "parentheses",
    },
    {
        q: "String values must be enclosed within ____ when being assigned to variables",
        answers: {
            A: "commas",
            B: "curly brackets",
            C: "quotes",
            D: "parentheses",
        },
        correctAnswer: "parentheses",
    },
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            A: "Javascript",
            B: "terminal/bash",
            C: "for loops",
            D: "console.log",
        },
        correctAnswer: "console.log",

    },
];




// Create function to start Quiz
function startQuiz() {
    console.log('started');
    startBtn.remove();
    showQuiz();
    countdown();
    getQuestion();
}
// Create countdown function
function countdown() {
    var timeInterval = setInterval(function () {
        if(timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 0) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);

}
// // Create function to pull questions
function getQuestion() {
    var currQuestion = questions[currentQuestion]
    quiz.textContent = currQuestion.q;
    answer1.textContent = currQuestion.answers.A
    answer2.textContent = currQuestion.answers.B
    answer3.textContent = currQuestion.answers.C
    answer4.textContent = currQuestion.answers.D
};
// Create function to pull next question
function nextQuestion() {
    currentQuestion++;
    getQuestion();
}
// Create function to remove the hide class
function showQuiz() {
    document.getElementById('quiz-section').classList.remove('hide');
}
// Create function to call results of quiz
function results () {
    result.textContent = totalPoints;
    document.write(totalPoints);
    renderScoreInitials();
}
// Create function to display error message if no input on initials
function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute('class', type);
}
// Create function to save initials and high score to local storage
function renderScoreInitials() {
    var initials = localStorage.getItem('initials');
    var highScore = localStorage.getItem('score');

    initialsInput.textContent = initials;
    score.textContent = highScore;
}
// Create button event listener for submitting high score
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var initials = document.getElementById('initials');
    var highScore = document.getElementById('score');

    if (initials === '') {
        displayMessage('Must enter Initials');
    } else {
        displayMessage('Check out your score!');

        localStorage.setItem('initials', initials);
        localStorage.setItem('score', highScore);
        renderScoreInitials();
    }
});
// function corrAnswer() {
// points =+ 100;
// }

// function inCorrAnswer() {

// }
// Create event listener for start quiz button
startBtn.addEventListener("click", startQuiz);
// Create event listener for first answer option button
answer1.addEventListener('click', function() {
    if (answer1 == questions.correctanswer){
        points += 100;
    } else (answer1 !== questions.correctAnswer); {
        timeLeft--;
        nextQuestion();
    }
   console.log();
});
// Create event listener for second answer option button
answer2.addEventListener('click', function() {
    if (answer2 == questions.correctanswer){
        points += 100;
    } else (answer2 !== questions.correctAnswer); {
        timeLeft--;
        nextQuestion();
    }
});
// Create event listener for third answer option button
answer3.addEventListener('click', function() {
    if (answer3 == questions.correctanswer){
        points += 100;
    } else (answer3 !== questions.correctAnswer); {
        timeLeft--;
        nextQuestion();
    }
});
// Create event listener for fourth answer option button
answer4.addEventListener('click', function() {
    if (answer4 == questions.correctAnswer){
        points += 100;
    } else (answer4 !== questions.correctAnswer); {
        timeLeft--; 
        nextQuestion();
    }
});