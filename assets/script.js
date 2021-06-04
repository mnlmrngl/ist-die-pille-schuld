document.getElementById("start").addEventListener("click", function () {
    if (document.getElementById('checkboxDisclaimer').checked == true)
        createCookie('disclaimerAccepted', 'true');
});



function createCookie(cookieName, cookieValue) {
    document.cookie = cookieName + '=' + cookieValue + ';';
    console.log('Cookie created: ' + document.cookie);
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