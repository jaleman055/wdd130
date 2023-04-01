// This script will add a dynamic date and time to the header
var header = document.querySelector("header");
var date = document.createElement("div");
date.className = "date";
header.appendChild(date);
function showDate() {
  var now = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var dateString = now.toLocaleDateString('en-US', options);
  var timeString = now.toLocaleTimeString('en-US');
  date.innerHTML = dateString + " " + timeString;
}
showDate();
setInterval(showDate, 1000);

// Add an event listener to the divs, which will display a message when it is clicked:

const fitnessDiaryDiv = document.querySelector('.proy_com:nth-of-type(1)');
fitnessDiaryDiv.addEventListener('click', () => {
  alert('The Fitness diary project was made in 2022, while I was Studying at BYU, it was made using Python.');
});

const sceneDiv = document.querySelector('.proy_com:nth-of-type(2)');
sceneDiv.addEventListener('click', () => {
  alert('The scene was made in 2022, while I was Studying at BYU, it was made using Python with the library Tkinter.');
});

const logisticsDiv = document.querySelector('.proy_com:nth-of-type(3)');
logisticsDiv.addEventListener('click', () => {
  alert('Database design and implementation was made by me in 2009 while I was working for FedEx.');
});

// This script add a responsive navbar that collapses into a hamburger menu on smaller screens
var nav = document.querySelector("nav");
var links = nav.querySelectorAll("a");
var burger = document.createElement("div");
burger.className = "burger";
burger.innerHTML = "&#9776;";
nav.appendChild(burger);
function toggleNav() {
  for (var i = 0; i < links.length; i++) {
    if (links[i].style.display == "block") {
      links[i].style.display = "none";
    } else {
      links[i].style.display = "block";
    }
  }
}
burger.addEventListener("click", toggleNav);
window.addEventListener("resize", function() {
  if (window.innerWidth > 768) {
    for (var i = 0; i < links.length; i++) {
      links[i].style.display = "block";
    }
  } else {
    for (var i = 0; i < links.length; i++) {
      links[i].style.display = "none";
    }
  }
});

// doom mode button for the footer

const doomButton = document.createElement("button");
doomButton.innerText = "Doom mode";
doomButton.addEventListener("click", () => {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "red";
});
document.querySelector("footer").appendChild(doomButton);
