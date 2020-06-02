import './base';
import './grid';
import './wrapper';
import './content';
import './header';
import './footer';
import initCarousel from './content';

export default () => {
  initCarousel();
  console.log('init layout');
};
