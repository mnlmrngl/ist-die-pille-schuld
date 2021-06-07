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

var activeQuestion = document.querySelector('.question--active');
console.log(activeQuestion);
var activeQuestionNumber = activeQuestion.dataset.number;
console.log(activeQuestionNumber);

var activeQuestionButtonNext = document.querySelector('.question__next');

//Next Question
document.querySelector('.question__next').addEventListener('click', function () {
    if (activeQuestion.dataset.number <= 12) {
        activeQuestion.classList.remove('question--active');

        //new Active Question

        activeQuestion = activeQuestion.nextElementSibling;
        activeQuestion.classList.add('question--active');
        console.log('New Active Question ')
        console.log(activeQuestion);

        activeQuestionNumber = activeQuestion.dataset.number;
        document.getElementById("question__num").textContent = activeQuestionNumber;
        console.log('New Active Question Number ' + activeQuestionNumber);
    }
});

//Prev Question
document.getElementById('back').addEventListener('click', function () {
    if (activeQuestion.dataset.number != 1) {
        activeQuestion.classList.remove('question--active');

        activeQuestion = activeQuestion.previousElementSibling;
        activeQuestion.classList.add('question--active');
        console.log('New Active Question ')
        console.log(activeQuestion);

        activeQuestionNumber = activeQuestion.dataset.number;
        document.getElementById("question__num").textContent = activeQuestionNumber;

        console.log('New Active Question Number ' + activeQuestionNumber);
    }
});

function createCookie(cookieName, cookieValue) {
    document.cookie = cookieName + '=' + cookieValue + '; path=/;';
    console.log('Cookie created: ' + document.cookie);
}

//Cookies mit Lösungen setzen
document.getElementById('getSolution').addEventListener('click', function () {
    var inputValues = document.querySelectorAll('input[type="range"]');
    console.log(inputValues)
    console.log(inputValues[0].value)

    for (let i = 0; i < inputValues.length; i++) {
        createCookie('a' + (i + 1), inputValues[i].value);
    }
    document.location = '../results';
});