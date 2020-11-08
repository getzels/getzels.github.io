function currentDate() {
    var now = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var day = days[now.getDay()];
    var month = months[now.getMonth()];

    document.getElementById("currentdate").innerHTML = day + ", " + now.getDate() + " " + month + " " + now.getFullYear();
}

function currentYear() {
    
    return document.write(new Date().getFullYear());
}

function showMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function adjustSeverity(severity) {
    document.getElementById("severityvalue").innerHTML = severity;
}

function setThankMessage(){
    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const fullName = urlParams.get('full_name');

    document.getElementById("name").innerHTML = fullName;

}

