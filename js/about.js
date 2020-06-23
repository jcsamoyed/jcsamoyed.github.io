$(window).resize(function () {
    if ($(window).width() < 650) {
        var deco_w1 = $(".deco").width() + 30;
        $(".deco").css("height", deco_w1);
    };
    if ($(window).width() < 425) {
        var deco_w2 = $(".deco").width() + 80;
        $(".deco").css("height", deco_w2);
    };
    // console.log(deco_w);
});