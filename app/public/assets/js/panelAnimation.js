var isFirstWheel = true;
var widthAmt;
var widthPercent;
var intervalId;

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
    if(isFirstWheel){
        widthAmt = 0;
        $(".swiper-container").fadeIn(3000, function(){
            intervalId = setInterval(panelVisible, 2);
        })
    } else {
        widthPercent = "35%";
        panelAnimation();
    }
});


function panelVisible() {
    widthAmt++

    if(widthAmt <= 35){
        widthPercent = widthAmt + "%";
        panelAnimation();
    } else {
        clearInterval(intervalId);
        isFirstWheel = false;
    }
}

function panelAnimation(){
    $(".left-container").css({
        "left": 0,
        "width": widthPercent,
    });
    $(".swiper-container").css({
        "left": 0,
        "width": widthPercent,
    });
}