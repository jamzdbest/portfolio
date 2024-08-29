$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    // var typed = new Typed(".typing", {
    //     strings: ["Developer", "Blogger", "Designer", "Freelancer"],
    //     blinkSpeed: 100,
    //     loop: true
    // });

    var randomStuff = ["Developer", "Blogger", "Designer", "Freelancer"];
    var $target;
    var loadContentIndex = 0;

    $(function() {
    $target = $('.typing'); //Set the target div...
    loadContent(); //Initiate it once on page load...
    window.setInterval(loadContent, 2000); //And set it to work every 2000ms (or 2s).
});

function loadContent() {
    $target.fadeOut(function() { //Once fade out is complete...
        $target.text(randomStuff[loadContentIndex] + "."); //Change the text
        $target.fadeIn(); //Fade back in.
    });

    loadContentIndex++; //Increase the array counter.
    if (randomStuff.length == loadContentIndex) { //If reached the end of the array...
        loadContentIndex = 0; //Reset the counter :)
    }
}


    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: false,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

