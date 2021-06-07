//stores solution in order
var solution = [];

console.log(document.cookie)

var cookieArray = document.cookie.split(';').sort();
console.log(cookieArray)

for (var i = 0; i < cookieArray.length; i++) {
    var cookieElement = cookieArray[i];

    while (cookieElement.charAt(0) === ' ') {
        cookieElement = cookieElement.substring(1);
    }
    if (cookieElement.indexOf('disclaimerAccepted') == -1) {
        var start = 'a' + i + '=';
        solution.push(cookieElement.substring(start.length, cookieElement.length))
    }
}
console.log(solution)