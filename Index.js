var nextBtn = document.querySelector(".gallery .buttons .next");
var prevBtn = document.querySelector(".gallery .buttons .prev");
var slide = document.querySelectorAll(".gallery .photos .block");
var i = 0;

prevBtn.onclick = function() {
  slide[i].classList.remove("active");
  i--;

  if (i < 0) {
    i = slide.length - 1;
  }
  slide[i].classList.add("active");
};

nextBtn.onclick = function() {
  slide[i].classList.remove("active");
  i++;

  if (i >= slide.length) {
    i = 0;
  }

  slide[i].classList.add("active");
};


// $('#h-header a').on('click', function () {
//     console.log("jquey working");
//     var activeLink = $('.link-active');
//     activeLink.removeClass('link-active');
//     $(this).parent().addClass('link-active');
// })


// function myFunction() {
//     var element = document.getElementById("b-banner");
//     element.classList.remove("mystyle");
//   }

  function startvideo() {
    var element = document.getElementById("b-banner");
    element.classList.add("mystyle");
    
    var element = document.getElementById("video");
    element.classList.add("vedio1");
  }

  var elementss ;
  for (var q = 0; q < document.links.length; q++) {
    if (document.links[q].href == document.URL) {
      
        console.log("inside highlight function" + document.links.length);
        document.links[q].className = 'link-active';
         elementss = document.getElementById("demov");
        elementss.classList.remove("initial");
      }
}

function toggle() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }