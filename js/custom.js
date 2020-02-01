$(function () {
    'use strict';

    // trigger counter up plugin 
    $('[data-toggle = counterup]').counterUp({
        delay: 10,
        time: 1000
    });

    $('#portfolio ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    // trigger mixitup plugin
    var mixer = mixitup('.portfolio');

    // trigger wow plugin
    new WOW().init();
});