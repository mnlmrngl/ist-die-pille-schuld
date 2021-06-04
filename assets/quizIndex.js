function checkDisclaimerCookie() {
    console.log('body loaded');
    if (readCookie('disclaimerAccepted') == 'true')
        console.log("ture")
    else
        console.log("false")
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
console.log(activeQuestion);

//Next Question
document.querySelector('.question--active .question__next').addEventListener('click', function () {
    activeQuestion.classList.remove('question--active');
    activeQuestion.nextElementSibling.classList.add('question--active');
    activeQuestion = activeQuestion.nextElementSibling;
});

//Prev Question
document.getElementById('controls').firstElementChild.addEventListener('click', function () {
    if (activeQuestion.getAttribute('data-number').charAt(0) != 1) {
        activeQuestion.classList.remove('question--active');
        activeQuestion.previousElementSibling.classList.add('question--active');
        activeQuestion = activeQuestion.previousElementSibling;
    }
});