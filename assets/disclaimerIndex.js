// Create Disclaimer Cookie if disclaiber is cecked
document.getElementById("start").addEventListener("click", function () {
    if (document.getElementById('checkboxDisclaimer').checked == true)
        createCookie('disclaimerAccepted', 'true');
});

function createCookie(cookieName, cookieValue) {
    document.cookie = cookieName + '=' + cookieValue + '; path=/;';
    console.log('Cookie created: ' + document.cookie);
}