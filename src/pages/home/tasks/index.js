import './index.sass';
import 'select2/dist/css/select2.min.css';
import 'select2/dist/js/select2.full.min';

export default() => {
  $(document).ready(function() {
    function formatState1 (state) {
      if (!state.id) {
        return state.text;
      }
      var baseUrl = "/images";
      var $state = $(
        '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
      );
      return $state;
    };

    function formatState (state) {
      if (!state.id) {
        return state.text;
      }

      var baseUrl = "/images";
      var $state = $(
        '<span><img class="img-flag" /> <span></span></span>'
      );

      // Use .text() instead of HTML string concatenation to avoid script injection issues
      $state.find("span").text(state.text);
      $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".png");

      return $state;
    };


    $(".js-select2").select2({
      templateResult: formatState1,
      templateSelection: formatState,
      width: '225px',
      minimumResultsForSearch: -1
    });

  });
}
