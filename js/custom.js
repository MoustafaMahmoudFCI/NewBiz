$(function () {
    'use strict';

    // trigger counter up plugin 
    $('[data-toggle = counterup]').counterUp({
        delay : 10 ,
        time : 1000
    });

    // trigger mixitup plugin
    var mixer = mixitup('.portfolio');

    // trigger owlcarousel
 //   $('.owl-carousel').owlCarousel();
    $('.owl-carousel').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items:1,
        loop:true,
        margin:30,
        stagePadding:30,
        smartSpeed:450
    });

        // trigger wow plugin
        new WOW().init();
});