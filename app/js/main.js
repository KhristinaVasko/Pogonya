var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 1,
    slidesPerView: 5,
    loop: true,
    freeMode: true,
    loop: true,
  loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
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