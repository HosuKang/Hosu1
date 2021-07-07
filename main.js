$(() => {

    $(".ham").click(function () {
        $(this).toggleClass("on");
        $("nav").toggleClass("on");
    });

    $("nav .gnb>li").click(function () {
        $("nav .gnb>li").removeClass("on");
        $(this).addClass("on");
    });



    let w = $('.slide_con').width();

    let intv = setInterval(function () {
        nextAni();
    }, 3000);

    $('.next').click(function () {
        clearInterval(intv)
        nextAni();
        intv = setInterval(function () {
            nextAni()
        }, 3000)
    });

    $('.prev').click(function () {
        clearInterval(intv)
        prevAni();
        intv = setInterval(function () {
            nextAni()
        }, 3000)
    });

    function nextAni() {
        $('.slide').not(':animated').animate({
            'marginLeft': -w + 'px'
        }, 700, function () {
            $('.slide>li').eq(0).appendTo($('.slide'))
            $('.slide').css('marginLeft', '0px')
            $('.dot span').eq(-1).prependTo($('.dot'))
            // $('.dot span').removeClass('big')
            // $('.dot span').eq(0).addClass('big')
            // $('.gogo .go').eq(n).addClass('on')
        });

    }

    function prevAni() {
        $('.dot span').eq(0).appendTo($('.dot'))
        // $('.dot span').removeClass('big')
        // $('.dot span').eq(-1).addClass('big')
        $('.slide>li').eq(-1).prependTo($('.slide'));
        $('.slide').css('marginLeft', -w + 'px');
        $('.slide').not(':animated').animate({
            'marginLeft': 0
        }, 700);
    }
});