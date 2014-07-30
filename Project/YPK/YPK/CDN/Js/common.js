$(function () {

    $("#coin-slider").coinslider({
        width: 960, // width of slider panel
        height: 445, // height of slider panel
        spw: 1, // squares per width
        sph: 1, // squares per height
        delay: 5000, // delay between images in ms
        sDelay: 500, // delay beetwen squares in ms
        opacity: 0, // opacity of title and navigation
        titleSpeed: 500, // speed of title appereance in ms
        effect: '', // random, swirl, rain, straight
        navigation: true, // prev next and buttons
        links: false, // show images as links 
        hoverPause: false // pause on hover
    });
   

    $("#tabs").tabs({
        collapsible: true
    });

    $("#tabsVertical").tabs({ disabled: [7, 8] }).addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#tabsVertical li").removeClass("ui-corner-top").addClass("ui-corner-left");


    $("#tabsVertical2").tabs({ disabled: [5,6] }).addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#tabsVertical2 li").removeClass("ui-corner-top").addClass("ui-corner-left");

    $("#tabsVertical2").tabs({ disabled: [5, 6] }).addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#tabsVertical2 li").removeClass("ui-corner-top").addClass("ui-corner-left");

    $("#tabsVertical3").tabs({ disabled: [4, 5] }).addClass("ui-tabs-vertical ui-helper-clearfix");
    $("#tabsVertical3 li").removeClass("ui-corner-top").addClass("ui-corner-left");

    $("#animalFeedReportDownload, #animalFeedReportDownload2").click(function (e) {
        e.preventDefault();
        window.open($(this).attr("href"));
        return false;
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 10  ) {
            $("body").addClass("scrolling");
        }
        else {
            $("body").removeClass("scrolling");
        }

    });

    

});