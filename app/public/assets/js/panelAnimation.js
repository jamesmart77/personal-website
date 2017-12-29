$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
            direction: 'vertical',
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            mousewheel: {
                sensitivity: 2,
                eventsTarged: 'body'
            }
    })
});

$("#main-row").on("wheel", function () {
    $(".left-container").css("left", 0);
    $(".swiper-container").css("left", 0);
});