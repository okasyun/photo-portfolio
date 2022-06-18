$(".mobile-menu__btn").click(function () {
        $(this).toggleClass('menu-open');
        $('.mobile-menu').toggleClass('menu-open');
        $('.mobile-menu__item').toggleClass('menu-open');
        $('.mobile-menu__icon').toggleClass('menu-open'); 
    });

    $("#mobile-menu a").click(function () {
        $('.mobile-menu').removeClass('menu-open');
        $('mobile-menu__btn').removeClass('menu-open');
    });

    $(".header__li").click(function () {
        $(this).addClass('current');
    });

    // クリックしたら今までのcurrentを削除するようにできていない
    $(".mobile-menu__item").click(function () {
        $(this).toggleClass('current');
    });