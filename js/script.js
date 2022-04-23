$('.nav a').on('click',function() {
    let position = $(this).parent().position();
    let width = $(this).parent().width();

    $('.nav .slide1').css({
        opacity: 1,
        left: +position.left,
        width: width
    });
})

$('.nav a').on('mouseover', function() {
    let position = $(this).parent().position();
    let width = $(this).parent().width();

    $('.nav .slide2').css({
        opacity: 1,
        left: +position.left,
        width: width
    });
})

$('.nav a').on('mouseout', function() {
    $('.nav .slide2').css({
        opacity: 0
    });
});

let currentWidth = $('.nav').find('li:nth-of-type(1) a').parent('li').width();
let current = $('li:nth-of-type(1) a').position();

$('.nav .slide1').css({
    left: +current.left,
    width: currentWidth
})