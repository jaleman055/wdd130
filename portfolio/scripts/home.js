
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

// This script will add a modal window that displays more information about the portfolio when the user clicks
var modal = document.createElement("div");
var close = document.createElement("span");
var content = document.createElement("div");
modal.className = "modal";
close.className = "close";
content.className = "content";
close.innerHTML = "&times;";
content.innerHTML = "<h4>More about this portfolio</h4><p>This portfolio showcases some of my projects (Julio Aleman) I have done using HTML, CSS, and JavaScript and my Portfolio. You can browse through my resume and see my skills and experience. You can also contact me by email or social media if you are interested in my work.</p>";
modal.appendChild(close);
modal.appendChild(content);
document.body.appendChild(modal);
var image = document.querySelector(".container img");
image.addEventListener("click", function() {
  modal.style.display = "block";
});
close.addEventListener("click", function() {
  modal.style.display = "none";
});
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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