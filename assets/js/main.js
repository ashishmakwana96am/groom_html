$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// --move to top
// Get the button
let moveToTopBtn = document.getElementById("moveToTopBtn");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    moveToTopBtn.style.display = "flex";
  } else {
    moveToTopBtn.style.display = "none";
  }
}

moveToTopBtn.onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
