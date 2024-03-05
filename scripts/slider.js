
const slider = $('.bxslider').bxSlider({
    minSlides: 3,
    maxSlides: 4,
    slideWidth: 287,
    slideMargin: 10,
    pager:true,
    controls:false
  });

 
$(".arrow__lelft").click(e => {
    e.preventDefault();

    slider.goToPrevSlide();
})


$(".arrow__right").click(e => {
    e.preventDefault();
    slider.goToNextSlide();
})