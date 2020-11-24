$(function () {

  // $('.slider__for-box').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: false,
  //   fade: true,
  //   prevArrow: '<div  class="slider-arrows slider-arrows__left"><img class="svg" src="images/arrow.svg" alt=""></div>',
  //   nextArrow: '<div  class="slider-arrows slider-arrows__right"><img class="svg" src="images/arrow.svg" alt=""></div>',
  //   asNavFor: '.slider__nav'
  // });
  // $('.slider__nav').slick({
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   asNavFor: '.slider__for-box',
  //   arrows: false,
  //   centerMode: true,
  //   // focusOnSelect: true
  // });

  // setInterval(() => {
  //   $('.slider__nav .active').removeClass('active');
  //   $('.slider__nav .slick-current').prev().addClass('active');
  //   $('.slider__nav .slick-current').next().addClass('active');
  // }, 500);

  jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if (typeof imgID !== 'undefined') {
        $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if (typeof imgClass !== 'undefined') {
        $svg = $svg.attr('class', imgClass + ' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Replace image with new SVG
      $img.replaceWith($svg);

    }, 'xml');

  });

});