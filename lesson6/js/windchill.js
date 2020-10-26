function windChill() {
    /*
    Wind Chill Temperature is officially defined for temperatures at or
     below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph).
    */
    temp= parseInt(document.getElementById("temperature").innerHTML);
    wind= parseFloat(document.getElementById("temperature").innerHTML);

    console.log("TEmp " + temp);
    console.log("Wind " + wind);
    
    windChill = "N/A";

    if(temp >= 50 && wind >= 3.0){
        windChill = (0.0817*(3.71*(Math.pow(wind, 0.5))+ 5.81-0.25*wind)*(temp-91.4)+91.4);
        console.log("wind chill " + windChill)
    }

    document.getElementById("windchill").innerHTML = windChill.toFixed(2);
    }