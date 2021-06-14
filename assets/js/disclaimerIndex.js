var checkbox = document.getElementById('checkboxDisclaimer')
var start = document.getElementById('start');

//Start
checkbox.addEventListener('click', function () {
    start.classList.toggle('button--disabled')
    if (checkbox.checked == true) {
        console.log(true)
    } else {
        console.log(false);
    }
});
start.addEventListener("click", function () {
    if (document.getElementById('checkboxDisclaimer').checked == true) {
        createCookie('disclaimerAccepted', 'true');
        document.location = '/';
        document.querySelector('label').classList.remove('error')

    } else {
        document.querySelector('label').classList.add('error')
    }
});



//disclaimer from Quiz
if (readCookie('disclaimerAccepted') == 'true') {
    var continueBtn = document.getElementById('continue');
    //remove old stuff
    start.style.display = 'none';
    document.querySelector('label').style.display = 'none'
    //show new stuff
    document.getElementById('leave').style.display = 'inline-block';
    continueBtn.style.display = 'inline-block';

    continueBtn.addEventListener('click', function () {
        if (readCookie('currentQuestion') == 'result')
            document.location = '/results';
        else
            document.location = '/'
    });
}