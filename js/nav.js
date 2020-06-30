window.onload = function () {
    var s = skrollr.init();
}

$(".burger").click(
    function () {
        $(".menu").toggleClass('show');
        $(".burger").toggleClass('open');
    }
);

$(".menu").on('click', 'a', function (evt) {
    evt.preventDefault();
    var target = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(target).offset().top - 150
    }, 1000, 'easeInOutQuint');
});