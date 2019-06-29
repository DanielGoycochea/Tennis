$(document).ready(function(){

  $('.menu-icon').click(function(){
    $('header nav').slideToggle();

  })

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin: 100,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        1000:{
            items:3
        }
    }
  })
})
