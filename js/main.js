// const btn = document.querySelector(".mobile-menu__btn");
// const header_current = document.querySelector(".header__li");
// const mobile_current = document.querySelector(".mobile-menu__item");

// btn.addEventListener("click", () => {
//     mobile_menu.classList.toggle('menu-open');
// });

// header_current.addEventListener("click", () => header_current.classList.toggle('current'));
// mobile_current.addEventListener("click", () => mobile_current.classList.toggle('current'));


$(".mobile-menu__btn").click(function () {
    $(this).toggleClass('menu-open');
    $('.mobile-menu').toggleClass('menu-open');
    $('.mobile-menu__item').toggleClass('menu-open');
    $('.mobile-menu__icon').toggleClass('menu-open'); 
});

$(".mobile-menu a").click(function () {
    $('mobile-menu').removeClass('menu-open');
    $('mobile-menu__btn').removeClass('menu-open');
});

$(".header__li").click(function () {
    $(this).toggleClass('current');
});

// クリックしたら今までのcurrentを削除するようにできていない
$(".mobile-menu__item").click(function () {
    $(this).toggleClass('current');
});