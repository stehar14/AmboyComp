$(function() {
    var header = $(".navbar");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 101) {
            header.addClass("collapsed");
        } else {
            header.removeClass("collapsed");
        }
    });
});