function wheaterData(town,lat = 0,lon = 0) {

  let weatherAPI;
  let forecastAPI;

  if(lat != 0){
    weatherAPI = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=f9bb398c42a5e0db7ee5d8fa04b70bde&units=imperial"
    forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=f9bb398c42a5e0db7ee5d8fa04b70bde&units=imperial"
  }else{
    weatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=" + town + "&appid=f9bb398c42a5e0db7ee5d8fa04b70bde&units=imperial"
    forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=" + town +"&appid=f9bb398c42a5e0db7ee5d8fa04b70bde&units=imperial"
  }


fetch(weatherAPI)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        
        document.getElementById("currently").innerHTML = jsonObject.weather[0].description;
        document.getElementById("high").innerHTML = jsonObject.main.temp_max;
        document.getElementById("humidity").innerHTML = jsonObject.main.humidity;
        document.getElementById("wind").innerHTML = jsonObject.wind.speed;

        windChill(jsonObject.main.temp_max, jsonObject.wind.speed);

  });

  fetch(forecastAPI)
  .then((response) => response.json())
  .then((jsonObject) => {
      const forecastList = jsonObject.list.filter(x => x.dt_txt.includes('18:00:00'));
      console.log(forecastList);

      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      for(let i = 0; i < forecastList.length; i++) {

          const foreDate = new Date(forecastList[i].dt_txt);
          let iconsrc = 'https://openweathermap.org/img/w/' + forecastList[i].weather[0].icon + '.png';
          
          let forecastCard = document.createElement('div');
          let weekday = document.createElement('h3');
          let img = document.createElement('img');
          let forecastTemp = document.createElement('p');

          weekday.textContent = weekdays[foreDate.getDay()];
          img.setAttribute('src', iconsrc);
          img.setAttribute('alt', forecastList[i].weather[0].description);
          img.style.width = '4.4em';
          forecastTemp.innerHTML = forecastList[i].main.temp + '&#176;F';

          forecastCard.appendChild(weekday);
          forecastCard.appendChild(img);
          forecastCard.appendChild(forecastTemp);

          document.querySelector('div.dayforecast').appendChild(forecastCard);
      }
  });  
}



function windChill(temp, wind) {

    console.log("TEmp " + temp);
    console.log("Wind " + wind);
    
    windChill = "N/A";

    if(temp >= 50 && wind >= 3.0){
        windChill = (0.0817*(3.71*(Math.pow(wind, 0.5))+ 5.81-0.25*wind)*(temp-91.4)+91.4).toFixed(2);
    }

    document.getElementById("windchill").innerHTML = windChill;
}