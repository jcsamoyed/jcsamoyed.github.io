var s = skrollr.init();

$(".burger").click(
    function () {
        $(".menu").toggleClass('show');
        $(".burger").toggleClass('open');
    }
);