import './index.sass';
import './pin';
import 'select2/dist/css/select2.min.css';
import 'select2/dist/js/select2.full.min';

export default() => {
  $(document).ready(function() {
    $(".js-select-right").select2({
      width: '100%',
      minimumResultsForSearch: -1
    });

    $(".pinned").pin({
      containerSelector: ".content-tasks",
      minWidth: 1104,
    });



  });
}
