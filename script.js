
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 2,
    slideShadows: false,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  on: {
    click(swiper) {
      if (swiper.clickedIndex !== undefined) {
        swiper.slideTo(swiper.clickedIndex);
      }
    },
  },
});

function playSong() {
  const song = document.getElementById("song");

  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
}
