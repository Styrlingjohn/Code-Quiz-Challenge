// First javascript add
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('scores');
var startButton = document.getElementById('startButton');
var score = document.getElementById('score');
var index = 0;
var clickButtons = document.querySelector('.clickButtons');
var quizA1 = document.getElementById('quizA1');
var quizA2 = document.getElementById('quizA2');
var quizA3 = document.getElementById('quizA3');
var quizA4 = document.getElementById('quizA4');
var submitButton = document.querySelector('submitScore');
var quizContainer = document.getElementById('quizContainer');
var questions = [
    {
        question: "How many sides does a circle have?",
        answer: {
            a: '1',
            b: '2',
            c: '3',
            d: '4'
        },
        correctAnswer: '4'
    },
    {
        question: "How many sides does a triangle have?",
        answer: {
            a: '1',
            b: '2',
            c: '3',
            d: '4'
        },
        correctAnswer: '4'
    },
    {
        question: "How many sides does a rectangle have?",
        answer: {
            a: '1',
            b: '2',
            c: '3',
            d: '4'
        },
        correctAnswer: '4'
    },
];

localStorage
function allQuestion() {
    if (questions[index]) {
        document.getElementById('quizQuestion').innerHTML = questions[index].question;
        quizA1.innerHTML = questions[index].answer.a;
        quizA2.innerHTML = questions[index].answer.b;
        quizA3.innerHTML = questions[index].answer.c;
        quizA4.innerHTML = questions[index].answer.d;
    } else {
        quizContainer.style.display = 'none'
        submitButton();
    }
    function submitButton() {
        var initials = document.querySelector('#initials').value;
        var finalScore = score.textContent = 2 + parseInt(score.textContent);
        if (initials === "") {
            alert('No intials')
        } else {
            localStorage.setItem(initials, finalScore);

        }
        console.log(initials);
    };

};
var timeLeft = 60;
function countdown() {
    var timerEl = document.getElementById('timer');


    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else if (timeLeft === 0) {
            timerEl.textContent = 'Times Up';
        }
    }, 1000);
}

function checkAnswer(e) {
    var selections = e.target.innerHTML
    // console.log(e.target.innerHTML)
    console.log(selections, questions[index].correctAnswer)
    if (selections === questions[index].correctAnswer) {
        console.log("Correct");
        score.textContent = 2 + parseInt(score.textContent);
    } else {
        console.log('Incorrect');
        timeLeft -= 5;
    };
    index++

    allQuestion();

};

quizA1.addEventListener('click', checkAnswer);
quizA2.addEventListener('click', checkAnswer);
quizA3.addEventListener('click', checkAnswer);
quizA4.addEventListener('click', checkAnswer);


function getStarted() {
    startButton.style.display = 'none'
    countdown();
    allQuestion();

}
