import './content.sass';
import initHome from '../../pages/home';

export default () => {
  $(document).ready(function(){
    $(".header__points-list-projects").hover(function() {
      var $div = $(this).nextAll(".field-group-format-wrapper");
      $div.toggle();
      $(this).toggleClass('open', $div.is(':visible'));
      $(this).toggleClass('closed', $div.is(':hidden'));
    });
  });
};
