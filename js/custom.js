  $(function () {
    'use strict';

    // add class active to active links
    $('.navbar .nav-item').on('click' , function(){
      $(this).addClass('active').siblings().removeClass('active');
    });

    // smooth scroll links to its section
    $('.navbar .nav-item a').click(function () {
      $('html , body').animate({
          scrollTop: $('#' + $(this).data('value')).offset().top
      }, 1000);
  });  
  $('')
    // trigger counter up plugin 
    $('[data-toggle = counterup]').counterUp({
      delay: 10,
      time: 1000
    });

    // add class active to portfolio links
$('#portfolio ul li').on('click' , function() {
      $(this).addClass('active').siblings().removeClass('active');
    });
    // trigger mixitup plugin
    var mixer = mixitup('.portfolio');

    // trigger owlcarousel
    //   $('.owl-carousel').owlCarousel();
    $('.owl-carousel').owlCarousel({
      animateOut: 'slideOutLeft',
      animateIn: 'slideInRight',
      items: 1,
      loop: true,
      margin: 30,
      stagePadding: 30,
      smartSpeed: 450,
      autoplay: true,
    });

    // show and hide scroll button  
    let scrollButton = $('#scroll-top');
    $(window).scroll(function () {
      $(this).scrollTop() >= 300 ? scrollButton.fadeIn('slow') : scrollButton.fadeOut('slow');
    });

    // scroll to top
    scrollButton.click(function () {
      $('html,body').animate({
        scrollTop: 0
      }, 1000);
    });


    // trigger wow plugin
    new WOW().init();
  });