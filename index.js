let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 8 seconds
}

// Add click event listener to each dot
let dotElements = document.getElementsByClassName("dot");
for (let i = 0; i < dotElements.length; i++) {
  dotElements[i].addEventListener("click", function () {
    slideIndex = i;
    showSlides();
  });
}

//for f-category
/*let currentIndex = 1;
showSlide(currentIndex);

function plusSlides(n) {
  showSlide((currentIndex += n));
}

function presentSlide(n) {
  showSlide((currentIndex = n));
}

function showSlide(n) {
  let i;
  let c_slides = document.getElementsByClassName("slide1");
  let c_dots = document.getElementsByClassName("demo");
  if (n > c_slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    currentIndex = c_slides.length;
  }
  for (i = 0; i < c_slides.length; i++) {
    c_slides[i].style.display = "none";
  }
  for (i = 0; i < c_dots.length; i++) {
    c_dots[i].className = c_dots[i].className.replace(" active1", "");
  }
  c_slides[currentIndex - 1].style.display = "block";
  c_dots[currentIndex - 1].className += " active1";
}*/
