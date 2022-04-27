$(document).ready(function(){
          
$('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMod: true,
    prevArrow: '<button class="slider__prev-btn" type="button" aria-label="предыдущий слайд"></button>',
    nextArrow: '<button class="slider__next-btn" type="button" aria-label="следующий слайд"></button>',
    responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            infinite: true,
            dots: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }
        }
    ]
});
});