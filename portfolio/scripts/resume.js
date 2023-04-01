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
