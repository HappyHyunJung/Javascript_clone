const images = ["url(src/img/city.jpg)", "url(src/img/farm.jpg)", "url(src/img/rest.jpg)", "url(../img/store.jpg)"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");

body.style.backgroundImage = chosenImage;
