const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=f9bb398c42a5e0db7ee5d8fa04b70bde&units=imperial"
const forecastAPI = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=f9bb398c42a5e0db7ee5d8fa04b70bde&units=imperial"

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


function windChill(temp, wind) {

    console.log("TEmp " + temp);
    console.log("Wind " + wind);
    
    windChill = "N/A";

    if(temp >= 50 && wind >= 3.0){
        windChill = (0.0817*(3.71*(Math.pow(wind, 0.5))+ 5.81-0.25*wind)*(temp-91.4)+91.4).toFixed(2);
    }

    document.getElementById("windchill").innerHTML = windChill;
}