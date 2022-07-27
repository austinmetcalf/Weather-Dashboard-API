let weather = {
    "apiKey": 'd94acb1c154e24b31d8e27b84e831950'
}



let searchButton = document.querySelector("#search-button")
searchButton.addEventListener("click", function(){
    let searchValue = document.querySelector(".search-bar").value
    console.log(searchValue)
    geoCode(searchValue)
})

function geoCode(searchValue){
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&limit=5&appid=d94acb1c154e24b31d8e27b84e831950`)
    .then(response => response.json())
    .then(dataReturn => {
        console.log(dataReturn)
        currentWeather(dataReturn[0].lat, dataReturn[0].lon)
        forecast(dataReturn[0].lat, dataReturn[0].lon)
    })
}

function currentWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d94acb1c154e24b31d8e27b84e831950&units=imperial`)
    .then(response => response.json())
    .then(dataReturn => {
        console.log(dataReturn)

        var cityName = document.createElement("h2")
        cityName.textContent = "Weather in " + dataReturn.name

        var temperature = document.createElement("h3")
        temperature.textContent = "Temperature is: " + dataReturn.main.temp + " F"
        
        var humidity = document.createElement("h3")
        humidity.textContent = "Humidity is: " + dataReturn.main.humidity

        var wind = document.createElement("h3")
        wind.textContent = "Wind is: " + dataReturn.wind.speed



        document.querySelector(".weather").append(cityName, temperature, humidity, wind)
    })
}

function forecast(lat, lon){
    fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=6&appid=d94acb1c154e24b31d8e27b84e831950&units=imperial`)
    .then(response => response.json())
    .then(dataReturn => {
        console.log(dataReturn)
        
for(var i = 0 ; i < dataReturn.length - 11; i++){
var temperature = document.createElement("h5")
        temperature.textContent = "temperature is " + dataReturn[i].list[0].temp.day

     document.querySelector("#five-day") 
}
    })
}