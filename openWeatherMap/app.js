var input = document.querySelector(".input_text");
var main = document.querySelector("#name");
var temp = document.querySelector(".temp");
var desc = document.querySelector(".desc");
var clouds = document.querySelector(".clouds");
var button = document.querySelector(".submit");

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=58a917fe3127da9eb262c09df961fbc8"
  )
    .then((response) => response.json())
    .then((data) => {
      const tempValue = data["main"]["temp"];
      const nameValue = data["name"];
      const descValue = data["weather"][0]["description"];

      main.innerHTML = nameValue;
      desc.innerHTML = "Desc - " + descValue;
      temp.innerHTML = "Temp - " + tempValue;
      input.value = "";
    })

    .catch((err) => alert("Wrong city name!"));
});

// AIzaSyAvHl4Zct8JIOX_nq6tG96EXNSSnosBI3k
