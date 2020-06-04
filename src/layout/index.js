import './base';
import './grid';
import './wrapper';
import './content';
import './header';
import './footer';
import initCarousel from './content';
import initHeader from './header';

export default () => {
  initCarousel();
  initHeader();
  console.log('init layout');
};
