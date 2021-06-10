//Check if disclaimer is accepted
if (readCookie('disclaimerAccepted') == 'true')
    console.log("true")
else {
    console.log("false")
    document.location = '/disclaimer';
}

function readCookie(object) {
    var element = object + '=';
    var cookieArray = document.cookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var cookieElement = cookieArray[i];
        while (cookieElement.charAt(0) === ' ') {
            cookieElement = cookieElement.substring(1);
        }
        if (cookieElement.indexOf(element) === 0) {
            return cookieElement.substring(element.length, cookieElement.length);
        }
    }
}


var activeQuestion;
var activeQuestionNumber;
//Check if user has paused quiz by reading disclaimer
if (readCookie('currentQuestion') == null) {
    activeQuestion = document.querySelector('.question--active');
    activeQuestionNumber = activeQuestion.dataset.number;
} else {
    activeQuestionNumber = readCookie('currentQuestion');
    activeQuestion = document.querySelector("[data-number='"+activeQuestionNumber+"'");
}

activeQuestion.classList.add('question--active')
document.getElementById("question__num").textContent = activeQuestionNumber;
var activeQuestionButtonNext = document.querySelector('.question__next');

//Next Question
document.querySelector('.question__next').addEventListener('click', function () {
    if (activeQuestion.dataset.number <= 12) {
        activeQuestion.classList.remove('question--active');

        //new Active Question

        activeQuestion = activeQuestion.nextElementSibling;
        activeQuestion.classList.add('question--active');

        activeQuestionNumber = activeQuestion.dataset.number;
        document.getElementById("question__num").textContent = activeQuestionNumber;
    }
});

//Prev Question
document.getElementById('back').addEventListener('click', function () {
    if (activeQuestion.dataset.number != 1) {
        activeQuestion.classList.remove('question--active');

        activeQuestion = activeQuestion.previousElementSibling;
        activeQuestion.classList.add('question--active');

        activeQuestionNumber = activeQuestion.dataset.number;
        document.getElementById("question__num").textContent = activeQuestionNumber;
    }
});

function createCookie(cookieName, cookieValue) {
    document.cookie = cookieName + '=' + cookieValue + '; path=/;';
}

//Cookies mit Lösungen setzen
document.getElementById('getSolution').addEventListener('click', function () {
    var inputValues = document.querySelectorAll('input[type="range"]');
    console.log(inputValues)

    for (let i = 0; i < inputValues.length; i++) {
        if (i < 9) {
            createCookie('a0' + (i + 1), inputValues[i].value);
        } else
            createCookie('a' + (i + 1), inputValues[i].value);
    }

    document.location = '../results';
});

//Go to Disclaimer
var disclaimer = document.getElementById('disclaimer')
disclaimer.addEventListener('click', function () {
    createCookie('currentQuestion', activeQuestionNumber);
})