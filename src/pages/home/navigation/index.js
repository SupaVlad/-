import './index.sass';
import './pin';

export default() => {
  $(document).ready(function() {

    $('a').click(function(){
      $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
      }, 500);
      return false;
    });

    $(".pin-wrapper ul li a").click(function() {
      $(this).parent().addClass('active').siblings().removeClass('active');
    });

    $(".pinnednav").pin({
      containerSelector: ".content-navigation",
      minWidth: 1122,
    });

  });
}
