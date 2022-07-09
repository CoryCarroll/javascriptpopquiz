// Create body element
var body = document.createElement("body");
// Create h1 element
var h1El = document.createElement("h1");
// Create div for questions
var questionEl;
// Create div for multiple choice answers
var answerEl;
// Create list element for answers
var listEl = document.createElement("ol");
// Create Start button
var startBtn = document.querySelector("#start");
// Create High Score submit page
var allDone;
// Create timer
var timerEl;
// Create an Array of questions
var questions = [];
// Create an Array for answers
var answers = [];
// Create high score element
var highScore;
// Create variable for Initials
var initials;
// Create Correct answer message
var correctMess = "Correct!";
// Create Wrong answer message
var wrongMess = "Wrong!";
// Create Times Up! message
var timeUp = "Times Up!";

// Create function to start Quiz
function startQuiz() {
var timeLeft = 60;

var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
    } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
    } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayTimeUp();
    }
}; 1000);
};
startQuiz();

// Create function to display if user gets answer correct
function displayCorrect() {}
// Create function to display if user gets answer wrong
function displayWrong() {}
// Create function to display when time is up
function displayTimeUp() {}
// Create event listener for start button
startBtn.addEventListener("click", startQuiz);
