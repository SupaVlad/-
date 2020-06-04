import './header.sass';

export default () => {
  $( ".cross" ).hide();
  $( ".menu-b" ).hide();
  $( ".hamburger" ).click(function() {
    $( ".menu-b" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });

  $( ".cross" ).click(function() {
    $( ".menu-b" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });
};
