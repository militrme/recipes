const link = 'a[href^="#"]',
    moreBtnEl = '.btn--about-me',
    skillSectionEl = '.skills',
    priceBtnEl = '.btn--skills',
    priceSectionEl = '.price'

$(link).on('click', function(event){
    event.preventDefault();

    var link = $(this).attr('href'),
        position = $(link).offset().top;

    $('html, body').animate({scrollTop: position}, 1000)
});

$(moreBtnEl).on('click', function(){
    var section = $(skillSectionEl).offset().top;

    $('html, body').animate({scrollTop: section}, 1000)
});

$(priceBtnEl).on('click', function(){
    var section = $(priceSectionEl).offset().top;

    $('html, body').animate({scrollTop: section}, 1000)
});