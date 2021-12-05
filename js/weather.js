const API_KEY="99059ab7d5d5081f2ba88042be412a7d";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live it",lat,lon);
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        const weather= document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);