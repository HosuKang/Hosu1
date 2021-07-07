$(() => {

    // 팝업닫기
    $(".pop_ok").click(function () {
        $(".pop").removeClass("on");
    });

    // 1.
    $(".calendar>div").click(function () {
        $(".calendar>div").removeClass("on");
        $(this).addClass("on");
    });

    $('.next1').click(function () {
        if (!$(".calendar>div").hasClass("on")) {
            $(".pop").addClass("on")
        } else {
            $(".next1").attr("href", "./sub_1-2.html")
        }
    });


    // 2.
    $('.next2').click(function () {
        if ($('input:radio').is(':checked')) {
            $(".next2").attr("href", "./sub_1-3.html")
        } else {
            $(".pop").addClass("on")
        }
    });

    // 3.
    $('.howmany>p').eq(0).click(function () {
        $('.per_booking').addClass('on');
    });
    $('.howmany>p').eq(1).click(function () {
        $('.grp_booking').addClass('on');
    });
    $('.go_group').click(function () {
        $('.per_booking').removeClass('on');
        $('.grp_booking').addClass('on');
    });
    $('.go_per').click(function () {
        $('.grp_booking').removeClass('on');
        $('.per_booking').addClass('on');
    });

    //   5.
    $('.next5').click(function () {
        if ($('input:checkbox').is(':checked')) {
            $(".next5").attr("href", "./sub_1-6.html")
        } else {
            $(".pop").addClass("on")
        }
    });
});