$(function () {
  $(".new__list").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: `<button class="new__list-arrow new__list-arrow--prev slide-arrow">
          <svg class="new__list-arrow__img slide-arrow__img" width="13" height="30" viewBox="0 0 13 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.3333 0.416706C10.7227 0.415754 11.1001 0.585287 11.4 0.895872C11.5688 1.07077 11.7083 1.28556 11.8105 1.52795C11.9128 1.77034 11.9758 2.03556 11.9959 2.30843C12.016 2.5813 11.9929 2.85645 11.9278 3.11812C11.8627 3.3798 11.757 3.62285 11.6167 3.83337L4.15 15L11.35 26.1875C11.4884 26.4006 11.5918 26.6458 11.6542 26.909C11.7166 27.1723 11.7368 27.4483 11.7135 27.7213C11.6903 27.9942 11.6241 28.2588 11.5188 28.4997C11.4135 28.7406 11.2712 28.9531 11.1 29.125C10.9276 29.3147 10.7256 29.4578 10.5068 29.5452C10.2881 29.6327 10.0572 29.6627 9.82871 29.6334C9.60022 29.604 9.37905 29.516 9.17908 29.3747C8.97911 29.2335 8.80465 29.0421 8.66666 28.8125L0.616663 16.3125C0.371527 15.9398 0.237517 15.4722 0.237517 14.9896C0.237517 14.5071 0.371527 14.0395 0.616663 13.6667L8.95 1.16671C9.11719 0.914589 9.32958 0.715288 9.56993 0.584978C9.81028 0.454668 10.0718 0.397018 10.3333 0.416706Z" fill="#5F5C5C"/>
</svg>
        </button>`,
    nextArrow: `<button class="new__list-arrow new__list-arrow--next slide-arrow">
          <svg class="new__list-arrow__img slide-arrow__img" width="13" height="30" viewBox="0 0 13 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.66673 29.5833C2.27731 29.5842 1.89992 29.4147 1.60006 29.1041C1.4313 28.9292 1.2918 28.7144 1.18954 28.472C1.08729 28.2297 1.0243 27.9644 1.00417 27.6916C0.984044 27.4187 1.00718 27.1436 1.07225 26.8819C1.13733 26.6202 1.24306 26.3771 1.3834 26.1666L8.85006 15L1.65007 3.81246C1.51162 3.59936 1.40824 3.35416 1.34585 3.09095C1.28346 2.82774 1.26331 2.55172 1.28654 2.27874C1.30977 2.00577 1.37593 1.74122 1.48122 1.50031C1.58651 1.2594 1.72885 1.04688 1.90006 0.874957C2.07251 0.685298 2.27445 0.542241 2.49322 0.454764C2.71199 0.367286 2.94287 0.337279 3.17136 0.366622C3.39984 0.395966 3.62101 0.484028 3.82098 0.625282C4.02095 0.766535 4.19541 0.957931 4.3334 1.18746L12.3834 13.6875C12.6285 14.0602 12.7625 14.5278 12.7625 15.0104C12.7625 15.4929 12.6285 15.9605 12.3834 16.3333L4.05006 28.8333C3.88287 29.0854 3.67048 29.2847 3.43013 29.415C3.18978 29.5453 2.92824 29.603 2.66673 29.5833Z" fill="#5F5C5C"/>
</svg>
        </button>`,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

//gamburger
let menuBtn = document.querySelector(".header__hamburger-btn");
//let aside = document.querySelector(".menu");
menuBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  menuBtn.classList.toggle("header__hamburger-btn--active");
  //aside.classList.toggle("menu--active");
});
