$(window).scroll(function(){
    if ($(this).scrollTop() > 10) {
        $('.fullname').addClass("enlarge");
    } else {
        $('.fullname').removeClass("enlarge");
    }
});