$(".i-header-close").click(function() {
    $(".i-search-box").show()
    $(".i-header-close").hide()
    $(".i-header-closes").show()
})
$(".i-header-closes").click(function() {
    $(".i-search-box").hide()
    $(".i-header-close").show()
    $(".i-header-closes").hide()
})
// 基金概况导航栏
$('.i-content-list').click(function() {
    $('.i-content-list').removeClass('i-content-nav-click')
    $(this).addClass('i-content-nav-click')
})
// 基金业绩导航栏
$('.i-content-achievement-list').click(function() {
    $('.i-content-achievement-list').removeClass('i-comment-nav-click')
    $('.i-content-achievement-list').find('i').css('overflow', 'hidden')
    $(this).addClass('i-comment-nav-click')
    $(this).find('i').css('overflow', 'visible')
})
// 历史净值导航栏
$('.i-content-networth-list').click(function() {
    $('.i-content-networth-list').removeClass('i-content-networth-nav-click')
    $(this).addClass('i-content-networth-nav-click')
})
// 持股及投资分布导航栏
$('.i-content-distribution-list').click(function() {
    $('.i-content-distribution-list').removeClass('i-comment-nav-click')
    $('.i-content-distribution-list').find('i').css('overflow', 'hidden')
    $(this).addClass('i-comment-nav-click')
    $(this).find('i').css('overflow', 'visible')
})
// 基金分红分页
$('.i-bonus-pagination-list').click(function() {
    var index = $(this).index()
    var length = $('.i-bonus-pagination-list').length
    var clickIndex = $('.i-bonus-pagination-list.i-comment-pagination-click').index()
    if (index == 0) {
        if (clickIndex != 1) {
            $('.i-bonus-pagination-list').removeClass('i-comment-pagination-click')
            $($('.i-bonus-pagination-list')[clickIndex - 1]).addClass('i-comment-pagination-click')
        }
    } else if (index == length -1) {
        if (clickIndex != length -2) {
            $('.i-bonus-pagination-list').removeClass('i-comment-pagination-click')
            $($('.i-bonus-pagination-list')[clickIndex + 1]).addClass('i-comment-pagination-click')
        }
    } else {
        $('.i-bonus-pagination-list').removeClass('i-comment-pagination-click')
        $(this).addClass('i-comment-pagination-click')
    }
})
// 销售费用导航栏
$('.i-content-cost-list').click(function() {
    $('.i-content-cost-list').removeClass('i-comment-nav-click')
    $('.i-content-cost-list').find('i').css('overflow', 'hidden')
    $(this).addClass('i-comment-nav-click')
    $(this).find('i').css('overflow', 'visible')
})
// 消费机构分页
$('.i-mechanism-pagination-list').click(function() {
    var index = $(this).index()
    var length = $('.i-mechanism-pagination-list').length
    var clickIndex = $('.i-mechanism-pagination-list.i-comment-pagination-click').index()
    if (index == 0) {
        if (clickIndex != 1) {
            $('.i-mechanism-pagination-list').removeClass('i-comment-pagination-click')
            $($('.i-mechanism-pagination-list')[clickIndex - 1]).addClass('i-comment-pagination-click')
        }
    } else if (index == length -1) {
        if (clickIndex != length -2) {
            $('.i-mechanism-pagination-list').removeClass('i-comment-pagination-click')
            $($('.i-mechanism-pagination-list')[clickIndex + 1]).addClass('i-comment-pagination-click')
        }
    } else {
        $('.i-mechanism-pagination-list').removeClass('i-comment-pagination-click')
        $(this).addClass('i-comment-pagination-click')
    }
})
// 信息披露导航
$('.i-content-disclosure-list').click(function() {
    $('.i-content-disclosure-list').removeClass('i-comment-nav-click')
    $('.i-content-disclosure-list').find('i').css('overflow', 'hidden')
    $(this).addClass('i-comment-nav-click')
    $(this).find('i').css('overflow', 'visible')
})

// 基于准备好的dom，初始化echarts实例
// var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            show: false
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};

// 使用刚指定的配置项和数据显示图表。
// myChart.setOption(option);