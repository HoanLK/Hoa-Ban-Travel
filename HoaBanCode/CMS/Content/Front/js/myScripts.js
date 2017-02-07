/*Nút back to top*/
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');

});

/*Nút tìm kiếm trên di động*/
$("#button-search").click(function () {
    console.log($("#search-box").is(":visible"));
    if (!$("#search-box").is(":visible")) {
        $("#search-box").slideToggle("medium");
        $("#dl-menu").css("border-bottom", "none");
    } else {
        $("#search-box").slideToggle("medium");
        $("#dl-menu").css("border-bottom", "solid 2px rgb(0, 156, 255)");
    }
});

/*Ô tìm kiếm máy tính*/
$("#btn-search").click(function () {
    $("#search-inp").toggle('slide');

    $("#phone-num").toggle('slide');
});

