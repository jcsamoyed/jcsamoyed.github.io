$(document).ready(function () {
    //--work_block初始高度
    var work_w = $(".work_block").width();
    $(".work_block").css("height", work_w)
    // console.log(work_w);

    //--overlay展開收合
    $('.work_block').click(function () {
        $('.overlay').fadeIn(200);
    });
    $('.close').click(function () {
        $('.overlay').fadeOut(200);
    });
});

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
    var work_w = $(".work_block").width();
    $(".work_block").css("height", work_w)
});