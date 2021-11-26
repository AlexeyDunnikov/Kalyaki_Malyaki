$(function () {

})

//gamburger
  let menuBtn = document.querySelector(".header__hamburger-btn");
  //let aside = document.querySelector(".menu");
  menuBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    menuBtn.classList.toggle("header__hamburger-btn--active");
    //aside.classList.toggle("menu--active");
  });