$(".buttons").click(function(event) {
    var index = $(".buttons").index(this);
    $(".click-buttons li p ").eq(index).addClass("switch-effects");
    $(".click-buttons li p").eq(index).parent().siblings().children().removeClass("switch-effects");
    $(".switch-content ").eq(index).removeClass("hide-toggle");
    $(".switch-content ").eq(index).siblings().addClass("hide-toggle");
})
var i = 1
$(".understand-button").click(function() {
    // var index = $(".copy-a").index(this);
    i++
    if (i % 2 != 0) {
        $(this).next().addClass("change-cilik");
        $(this).addClass("change-icon")

    } else {
        $(this).next().removeClass("change-cilik");
        $(this).removeClass("change-icon");
    }
})