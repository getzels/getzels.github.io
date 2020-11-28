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

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
      console.table(jsonObject);  // temporary checking for valid response and data parsing
      const towns = jsonObject['towns'];
     
          for (let i = 0; i < towns.length; i++ ) {
            if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven'){
                let card = document.createElement('section');
                let div = document.createElement('div');
                let name = document.createElement('h2');
                let motto = document.createElement('p');
                let yearFounded = document.createElement('p');
                let currentPopulation = document.createElement('p');
                let averageRainfall = document.createElement('p');
                let image = document.createElement('img');
    
                name.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
                averageRainfall.textContent = 'Anual Rain Fall: ' + towns[i].averageRainfall;
                image.setAttribute('src', "images/" + towns[i].photo);
                image.setAttribute('alt', towns[i].name);
    
                div.appendChild(name);
                div.appendChild(motto);
                div.appendChild(yearFounded);
                div.appendChild(currentPopulation);
                div.appendChild(averageRainfall);
    
                card.appendChild(div);
                card.appendChild(image);    
                card.classList.add('towns');        
    
                document.querySelector('div.cards').appendChild(card);
          }

      }

  });

  document.addEventListener("DOMContentLoaded", function (){
    const imgagesToLoad = document.querySelectorAll("[data-src]");
    const loadImages = (image) => {
        image.setAttribute("src", image.getAttribute("data-src"));
        image.onload = () => {
            image.removeAttribute("data-src");
        };
    };
    
    const imageOptions = {};
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (!item.isIntersecting) {
                return;
            }else{
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imageOptions);
    
    imgagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
    });

    // StoreCenter
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

