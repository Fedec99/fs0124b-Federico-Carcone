//  colore nav e bottone 

const change = 470;
const startedButtonChange = document.getElementById("startedButton");
const navChanges = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY >= change) {
    startedButtonChange.classList.add("green-button");
    navChanges.classList.add("navChange");
    startedButtonChange.classList.remove("green-button-off");
    navChanges.classList.remove("head-off");
  } else if (window.screenY < change) {
    startedButtonChange.classList.remove("green-button");
    navChanges.classList.remove("navChange");
    startedButtonChange.classList.add("green-button-off");
    navChanges.classList.add("head-off");
  }
});

// animazione svg M

const m = document.querySelectorAll("g[stroke-linecap='butt']");
setInterval(() => {
  const random = Math.round(Math.random() * (m.length - 1));
  m[random].classList.toggle("invisible");
}, 10);


