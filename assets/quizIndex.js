function checkDisclaimerCookie() {
    if (readCookie('disclaimerAccepted') == 'true')
        console.log("ture")
    else {
        console.log("false")
        document.location = '/disclaimer';
    }
}

function readCookie(object) {
    var element = object + '=';
    var cookieArray = document.cookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var cookieElement = cookieArray[i];
        while (cookieElement.charAt(0) === ' ') {
            cookieElement = cookieElement.substing(1);
        }
        if (cookieElement.indexOf(element) === 0) {
            return cookieElement.substring(element.length, cookieElement.length);
        }
    }
}


//Question
var activeQuestion = document.querySelector('.question.question--active');
var questionNumber = activeQuestion.dataset.number;

//Next Question
document.querySelector('.question--active .question__next').addEventListener('click', function () {
    activeQuestion.classList.remove('question--active');
    activeQuestion.nextElementSibling.classList.add('question--active');
    activeQuestion = activeQuestion.nextElementSibling;
    questionNumber++;
    document.getElementById("question__num").textContent = questionNumber;
});

//Prev Question
document.getElementById('controls').firstElementChild.addEventListener('click', function () {
    if (activeQuestion.getAttribute('data-number').charAt(0) != 1) {
        activeQuestion.classList.remove('question--active');
        activeQuestion.previousElementSibling.classList.add('question--active');
        activeQuestion = activeQuestion.previousElementSibling;
        questionNumber--;
        document.getElementById("question__num").textContent = questionNumber;
    }
});