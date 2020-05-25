import './content.sass';
import initHome from '../../pages/home';

export default () => {
  $(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      dots: true,
      loop:true,
      items:3,
      margin:135,
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
          nav:true,
          margin:10,
        },
        600:{
          items:2,
          nav:false,
          margin:120,
        },
        1000:{
          items:2,
          nav:true,
          loop:true,
          center: true,
          autoWidth: true,
          margin:20,
        }
      }
    });
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      }
    });
    $('.popup-gallery-thecond').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      }
    });
    $('.popup-gallery-third').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      }
    });
  });
};
