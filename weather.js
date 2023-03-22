date = document.getElementById("datenow");
function getDatenow()
{
    let now = new Date(),
    hour = now.getHours(),
    minute= now.getMinutes();

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
];

hour = hour%12;
if(hour<10){
    hour="0"+hour;
}
if(minute<10){
    minute="0"+minute;
}
let dayString = days[now.getDay()];
return `${hour}:${minute} || ${dayString}`;
}

date.innerText = getDatenow();

let weather = {
    apiKey: "a3621e3e54dcd05b833a6edd32fa707e",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => [this.displayWeather(data),this.displayWeather1(data),this.displayWeather2(data),this.displayWeather3(data),this.displayWeather4(data)])
    },
    displayWeather: function (data) {
      const { name } = data.city;
      const { temp } = data.list[0].main;
      const { description } = data.list[0].weather[0];
      document.querySelector(".city").innerText =name;
      document.querySelector(".temp1").innerText = temp + "°C";
      document.querySelector(".desc1").innerText = description;
      
    },
    displayWeather1: function (data) {
      const { temp } = data.list[0].main;
      const { description } = data.list[0].weather[0];
      document.querySelector(".temp2").innerText = temp + "°C";
      document.querySelector(".desc2").innerText = description;
      
    },
    displayWeather2: function (data) {
        const { temp } = data.list[16].main;
        const { description } = data.list[16].weather[0];
        document.querySelector(".temp3").innerText = temp + "°C";
        document.querySelector(".desc3").innerText = description;
        
      },
      displayWeather3: function (data) {
        const { temp } = data.list[24].main;
        const { description } = data.list[24].weather[0];
        document.querySelector(".temp4").innerText = temp + "°C";
        document.querySelector(".desc4").innerText = description;
        
      },
      displayWeather4: function (data) {
        const { temp } = data.list[32].main;
        const { description } = data.list[32].weather[0];
        document.querySelector(".temp5").innerText = temp + "°C";
        document.querySelector(".desc5").innerText = description;
        
      },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
  };
  
  document.querySelector(".searchportion button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Delhi");

