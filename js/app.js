
var intro = document.getElementById("intro");
var introheader = document.getElementById("introheader");
var introheadercontent = document.getElementById("introheadercontent");
var introoffset = intro.offsetHeight;

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 80;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }

  if (window.pageYOffset > introoffset) {
    introheader.classList.add("sticky");
    //introheadercontent.classList.add("show");
  } else {
    introheader.classList.remove("sticky");
    //introheadercontent.classList.remove("show");
  }
}

window.addEventListener("scroll", reveal);
