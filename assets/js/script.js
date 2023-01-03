
var startButton = document.querySelector("#start-btn");
var questionContainer = document.querySelector("#question-container");
var shuffledQuestions, currentQuestionsIndex;
var questionDiv = document.querySelector("#question");
var answerbuttons = document.querySelector("#answer-buttons")
var nextButton = document.querySelector("#next-btn")
var body = document.querySelector("body")
var count = 60;
var timer = document.querySelector("#Timer")
var score = 0
var HomeBtn = document.querySelector(".HomeBtn")
var arr = JSON.parse(localStorage.getItem("players"))
localStorage.setItem("score", score)


startButton.addEventListener("click", startGame);

nextButton.addEventListener("click", () => {
    currentQuestionsIndex++;
    setNextQuestion()
    //console.log(currentQuestionsIndex)
})

function startGame(){
    setTime()
    console.log("Started");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionsIndex = 0;
    questionContainer.classList.remove("hide");
    setNextQuestion();
}

function setTime(){
    var timerInterval = setInterval(function() {
        count--;
        timer.innerText = count
        if (count === 0){
            clearInterval(timerInterval)
            timer.innerText = "Time out"
            returnhome()
        }
    }, 1000);
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function resetState(){
    clearStatusClass(body)
    nextButton.classList.add("hide")
    while (answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild)
    }
}

function showQuestion(question){
    questionDiv.innerText = question.question
    question.answers.forEach(answer => {
       var button = document.createElement("button");
       button.innerText = answer.text;
       button.classList.add("btn");
       if (answer.correct){
        button.dataset.correct = answer.correct
       }
       button.addEventListener("click", selectAnswer);
       answerbuttons.appendChild(button);
    });
}

function selectAnswer(event){
    var selectedButton = event.target
    var correct = selectedButton.dataset.correct
    setStatusClass(body, correct)
    Array.from(answerbuttons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove("hide")
    if (shuffledQuestions.length > currentQuestionsIndex + 1){
        nextButton.classList.remove("hide")
    } else {
        /*startButton.innerText = "Restart"
        startButton.classList.remove("hide")*/
        nextButton.classList.add("hide")
        returnhome()
    }
    if (correct){
        score++
        localStorage.setItem("score", score)
        console.log(localStorage.getItem("score"))
    } else {
        count -= 5
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if (correct){
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

function returnhome(){
    window.alert("The quiz is done, press the home button in the bottom right corner")
    HomeBtn.classList.remove("hide")
    questionContainer.classList.add("hide")
    timer.innerText = "Finish"
    count = "finish"
}

var questions = [
    {
        question: "Javascript is an _________ languaje",
        answers: [
            {text: "Object-Oriented", correct: true},
            {text: "Object-Based", correct: false},
            {text: "Procedural", correct: false},
            {text: "None of the above", correct: false},
        ]
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript?",
        answers: [
            {text: "getElementbyId()", correct: false},
            {text: "getElementsByClassName()", correct: false},
            {text: "querySelector()", correct: false},
            {text: "All of the above", correct: true},
        ]
    },
    {
        question: "Which of the following methods can be used to display data in some form using Javascript?",
        answers: [
            {text: "All of the above", correct: true},
            {text: "document.write()", correct: false},
            {text: "console.log()", correct: false},
            {text: "window.alert()", correct: false},
        ]
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        answers: [
            {text: "stringify()", correct: true},
            {text: "parse()", correct: false},
            {text: "convert()", correct: false},
            {text: "None of the above", correct: false},
        ]
    },
]