// 메뉴
$(document).ready(function() {

    $.each($("#gnb > ul > li"), function(index, item) {

        //주메뉴
        var aTag = $().find('#banner');
        var sub = $(this).find("#banner");

        aTag.mouseenter(function() {


            sub.slideDown();
        });

        $(this).mouseleave(function() {

            sub.slideUp();
        });


    });

});