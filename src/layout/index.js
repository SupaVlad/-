import './base';
import './grid';
import './wrapper';
import './content';
import './header';
import './footer';
import initCarousel from './content';
import 'owl.carousel/dist/assets/owl.carousel.css';

export default () => {
  initCarousel();
  console.log('init layout');
};
