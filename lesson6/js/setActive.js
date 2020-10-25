window.onload = function() {
var selector, elems, makeActive;

elems = document.getElementById("mainmenu").querySelectorAll('li');
makeActive = function () {
    for (var i = 0; i < elems.length; i++)
        elems[i].classList.remove('active');

    this.classList.add('active');
};

for (var i = 0; i < elems.length; i++)
    elems[i].addEventListener('click', makeActive);

if (new Date().getDay() == 5){
    document.getElementById("banner").style.display = 'block';
} else{
    document.getElementById("banner").style.display = 'none';
}
    // hide the lorem ipsum text
};
