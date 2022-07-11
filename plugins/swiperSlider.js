import Swiper from 'swiper/swiper-bundle.min'
import 'swiper/swiper-bundle.min.css'

export function initSlider(swiperId) {
  let swiper = new Swiper(`.swiper${swiperId}`, {
    breakpoints: {
      0:{
        slidesPerView: 1,
        spaceBetween: 10,

      },
      769:{
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      },
      1000:{
        slidesPerView: 3,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
      }
    }
  });
}

export function nextSlide(swiperId) {
  const swiper = document.querySelector(`.swiper${swiperId}`).swiper;
  swiper.slideNext();
}

export function prevSlide(swiperId) {
  const swiper = document.querySelector(`.swiper${swiperId}`).swiper;
  swiper.slidePrev();
}
