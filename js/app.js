$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__menu,.header__link").toggleClass("active");
    $("body").toggleClass("lock");
  });
  $(".header__link").click(function (event) {
    $(".header__burger,.header__menu,.header__link").toggleClass("active");
    $("body").toggleClass("lock");
  });
  // $(".kinesiology").click(function (event) {
  //   $(".page__section.drainage,").toggleClass("hidden");
  // });
});
