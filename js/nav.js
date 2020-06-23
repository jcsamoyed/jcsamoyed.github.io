// $(window).scroll(function () {
//     if ($(document).scrollTop() > 80) {
//         $(".logo").addClass("show");
//     } else {
//         $(".logo").removeClass("show");
//     }
// });

var s = skrollr.init();

$(".burger").click(
    function () {
        $(".menu").toggleClass('show');
    }
);