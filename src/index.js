import 'core-js/es/promise';

import $ from 'jquery';

// Uncomment for use BOOTSTAP4
// window.Popper = require('popper.js').default;
// require('bootstrap');
// import 'bootstrap/scss/bootstrap.scss';

import './fonts';
import initLayout from './layout';
import initBlocks from './blocks';
import initPages from './pages';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import 'magnific-popup';
import 'magnific-popup/dist/jquery.magnific-popup.min';

$(() => {
  initLayout();
  initBlocks();
  initPages();
});
