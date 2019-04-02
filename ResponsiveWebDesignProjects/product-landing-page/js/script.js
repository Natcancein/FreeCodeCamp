// Obtenido de  Sorin Ruse https://codepen.io/sorinr/pen/qqQMZp

//for Sorin Ruse
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    var target = $(this.hash);
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
    }
  });
});
