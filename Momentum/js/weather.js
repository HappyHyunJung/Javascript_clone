const API_KEY = "bd41178b9cdac446f44b42ad32f0affd";

function onGeoOk(position) {
  // getCurrentPosition()이 성공할 경우 실행
  const lat = position.coords.latitude;
  const log = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
  console.log(`${url}`);
  console.log(`경도 : ${lat}, 위도 : ${log}`);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  // getCurrentPosition()이 실패할 경우 실행
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
