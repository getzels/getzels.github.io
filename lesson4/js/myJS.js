function currentDate() {
    var d = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var day = days[now.getDay()];
    var month = months[now.getMonth()];

    var n = days[d.getDay()];
    return document.write(day + ", " + d.getDate + " " + month + " " + d.getFullYear);
}

function showMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}