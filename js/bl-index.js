
$(".i-header-close").click(function () {
    $(".i-search-box").show()
    $(".i-header-close").hide()
    $(".i-header-closes").show()
})
$(".i-header-closes").click(function () {
    $(".i-search-box").hide()
    $(".i-header-close").show()
    $(".i-header-closes").hide()
})
$(".btn-holderx").click(function () {
    var display = $(".nav-dropdown").css('display');
    if (display == 'none') {
        $(".a-btn-holder").css({ "background-color": "#000", "color": "#fff", })
        $(".a-btn-holder button").css({ "background-color": "#000", "color": "#fff", })
        $(".nav-dropdown").stop().slideDown();
        // $(".i-headerx").hide()
    } else {
        $(".a-btn-holder").css({ "background-color": "#efefef", "color": "#000", })
        $(".a-btn-holder button").css({ "background-color": "#efefef", "color": "#000", })
        $(".nav-dropdown").stop().slideUp()
        // $(".i-headerx").show()
    }
})
$(".no-outline").click(function () {
    $(".a-btn-holder").css({ "background-color": "#efefef", "color": "#000", })
    $(".a-btn-holder button").css({ "background-color": "#efefef", "color": "#000", })
    $(".nav-dropdown").stop().slideUp()
    // $(".i-headerx").show()
})
$(".i-header-list .nav-item").hover(function () {
    $(this).find('.nav-slide-box').stop().slideDown();
}, function () {
    $(".i-header-list .nav-item").find('.nav-slide-box').stop().slideUp();
})

$(function () {
    $('.body').css('overflow-y', 'hidden')
})
$('.i-popup-right-accept').click(function () {
    $('.i-popup-box').css('display', 'none')
    $('.body').css('overflow-y', 'visible')
})
// 判断是否是移动端打开
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
        // 移动端页面
        $('body').css('width', '135%')
    } else {
        // pc端页面
        $('body').css({ "width": "100%", "overflow-x": "hidden" })
    }
}
browserRedirect();