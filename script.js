
      let currentIndex = 0;
      const items = document.querySelectorAll('.carousel-item');
      const totalItems = items.length;

      function moveToNext() {
        if (currentIndex < totalItems - 1) {
          currentIndex++;
        } else {
          currentIndex = 0;
        }
        updateCarouselPosition();
      }

      function updateCarouselPosition() {
        const carousel = document.querySelector('.carousel');
        const offset = -currentIndex * (items[0].offsetWidth + 20); // 20px is the margin between items
        carousel.style.transform = `translateX(${offset}px)`;
      }

      // Auto-slide the carousel every 3 seconds
      setInterval(moveToNext, 3000);

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 6000,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        }
    }
})