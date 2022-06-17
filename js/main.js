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


const images = document.querySelectorAll(".img-display img")
let num = 1;
console.log(images);

setInterval(() => {
    // const ran_num = Math.floor(Math.random() * images.length);
    // const array = Array.from(images);
    // const word = array.splice(ran_num,1)[0];
    // console.log(word);
    num++;
    const image = document.querySelector(".img-display .active")
    image.classList.remove("active")
    if (num >= images.length) {
        images[0].classList.add("active");
        num = 1;
    }
    else {
        image.nextElementSibling.classList.add("active")
    }

}, 6000)



// const $images = $('.img-display img');
// console.log($images.length);
// console.log($images)

// let num = 1;
// setInterval(() => {
//     num++;
//     const $image = $('.img-display .active');
//     $('.img-display .active').removeClass('active');

//     if (num >= $images.length) {
//         $images.item(0).addClass("active");
//         num = 1;
//     }
//     else {
//     $image.next().addClass('active');
//     }
// }, 5000);

// queryselectorallで全画像取得
// ランダムメソッドでランダムに数を取得
// そのランダム数に一致するインデックスの画像にactiveつける

// 時間関数でactive除去して次の要素に追加する
