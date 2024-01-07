const images = ["url(../img/city.jpg)", "url(../img/farm.jpg)", "url(../img/rest.jpg)", "url(../img/store.jpg)"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector("body");

body.style.backgroundImage = chosenImage;
