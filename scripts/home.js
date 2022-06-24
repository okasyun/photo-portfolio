// const btn = document.querySelector(".mobile-menu__btn");
// const header_current = document.querySelector(".header__li");
// const mobile_current = document.querySelector(".mobile-menu__item");

// btn.addEventListener("click", () => {
//     mobile_menu.classList.toggle('menu-open');
// });
// header_current.addEventListener("click", () => header_current.classList.toggle('current'));
// mobile_current.addEventListener("click", () => mobile_current.classList.toggle('current'));

window.onload = function () {
    const images = document.querySelectorAll("img")
    let num = 0;
    console.log(images);

    const element = document.querySelector(".img-display__show");
    element.addEventListener('animationiteration', slide_animate);

    function slide_animate() {
        num++;
        const image = document.querySelector("div .active")
        image.classList.remove("active")
        if (num >= images.length) {
            images[0].classList.add("active");
            num = 0;
        }
        else {
            image.nextElementSibling.classList.add("active")
        }
    }

}