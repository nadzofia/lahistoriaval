(function ($) {
  "use strict";

  // NAVBAR
  $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
  });

  // Vegas Slideshow Initialization
  $(function() {
      $('.hero-slides').vegas({
          slides: [
              { src: 'images/slides/valenzuela_peoplespark.jpg' },
              { src: 'images/slides/valenzuela_arkongbato.jpg' },
              { src: 'images/slides/valenzuela_church.jpeg' }
          ],
          timer: false,
          animation: 'kenburns',
      });
  });

  // CUSTOM LINK
  $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;

      scrollToDiv(elWrapped, header_height);
      return false;

      function scrollToDiv(element, navheight){
          var offset = element.offset();
          var offsetTop = offset.top;
          var totalScroll = offsetTop - navheight;

          $('body,html').animate({
              scrollTop: totalScroll
          }, 300);
      }
  });
  
  var navbar = $('.navbar');

  $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
          navbar.addClass('navbar-fade');
      } else {
          navbar.removeClass('navbar-fade');
      }
  });

})(window.jQuery);