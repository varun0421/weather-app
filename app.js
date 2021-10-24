let weather = {
    "apikey" : "d9b2319ee9512559735c03c413272167",
    fetchweather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
             + city 
             + "&units=metric&appid="
             + this.apikey
        )
            .then(response => response.json())
            .then(data => this.displayweather(data))
    // .catch(error => alert("Wrong City Name"))

    },    
    displayweather: function(data) {
        const { name } = data;
        const { icon , description } = data.weather[0];
        const {temp , humidity } = data.main;
        const {speed} = data.wind;
        console.log(data);
        document.querySelector(".city").innerHTML = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
        document.querySelector(".desc").innerHTML = description;
        document.querySelector(".temp").innerHTML = temp + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerHTML = "Wind Speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";

    },
    search: function () {
        this.fetchweather(document.querySelector(".search-bar").value);
    }

};


document.querySelector(".search button").addEventListener('click', function () {
    weather.search();

})
document.querySelector(".search-bar").addEventListener("keyup" , function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
})
weather.fetchweather("Delhi");