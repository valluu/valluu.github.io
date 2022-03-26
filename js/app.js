

var intro = document.getElementById("intro");
var questions = document.getElementById("questions");
var contactbutton = document.getElementById("contactbutton");

var introoffset = intro.offsetHeight;

function reveal() {

  var questions = document.getElementById("questions");
  var windowHeight = window.innerHeight;
  var elementTop = questions.getBoundingClientRect().top;
  var elementVisible = 80;

  if (elementTop < windowHeight - elementVisible) {
      contactbutton.classList.add("hidden");
    } else {
      contactbutton.classList.remove("hidden");
    }
  
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

/* Fancybox */

$(document).ready(function () {

  $('[data-fancybox="images"]').fancybox({
   'type':'iframe','autoScale':true, 'width': "80vw", 'height':"80vh", 'centerOnScroll':true
  });
});
