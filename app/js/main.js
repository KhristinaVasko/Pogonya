AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
function opentab1(tabName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(tabName).style.display = "block";  
}

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 1,
    slidesPerView: 5,
    loop: true,
    freeMode: true,
    loop: true,
    loopedSlides: 5, 
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    scrollbar: {
      el:'.swiper-scrollbar',
      draggable: true,
    }
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: galleryThumbs,
    },
    // scrollbar: {
    //   el:'.swiper-scrollbar',
    //   draggable: true,
    // }
  });

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("burg-icon").style.display = "none";
    document.getElementById("burg-close").style.display = "block";

  }
  function openNav1() {
    document.getElementById("myNav1").style.width = "100%";
  }
  
  function closeNav1() {
    document.getElementById("myNav1").style.width = "0%";
  }
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("burg-icon").style.display = "block";
    document.getElementById("burg-close").style.display = "none";
  }

  function chngimg() {
    var img = document.getElementById('imgplus').src;
    if (img.src.indexOf('img/icons/hamburger.svg')!=-1) {
        document.getElementById('imgplus').src  = 'img/icons/close.svg';
    }
     else {
       document.getElementById('imgplus').src = 'img/icons/hamburger.svg';
   }

}

//tabs navigation 1
$(function() {
  $(".tab1-btns-item").on("click", function(e) {
      $(this).addClass("active1").siblings().removeClass("active1");    
  });
})
//tabs content 1
function opentab1(tabName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(tabName).style.display = "block";  
}
// homepage burger menu

//prays content
// $(document).ready(function(){
//   $(".pray-name").click(function(){
//     $(".pray-content-text").slideToggle();
//   });
//   $(".pray-name2").click(function(){
//     $(".pray2-content").slideToggle("slow");
//   });
// });

//dropdown молитви
$(document).ready(function(){

  $('div.dropdown').each(function() {
    var $dropdown = $(this);
  
    $("div.dropdown-link", $dropdown).click(function(e) {
      e.preventDefault();
      $div = $("div.dropdown-container", $dropdown);
      $div.toggle();
      $("div.dropdown-container").not($div).hide();
      return false;
    });
  }); 
  $('html').click(function(){
    $("div.dropdown-container").hide();
  }); 
  });
