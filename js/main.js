$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header-menu').removeClass('close');
        $('.header__burger, .header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(document).ready(function () {
    $('.header-menu__link').click(function (event) {
        $('.header__burger, .header-menu').removeClass('active');
        $('body').removeClass('lock');
        $('.header-menu__link, .header-menu').addClass('close');
    });
});