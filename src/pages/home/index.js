import './index.sass';
import './index.pug';
import initTasks from './tasks';
import initLearning from './learning';
import initVideos from './videos';
import initReview from './review';
import initSlicky from './slicky';
import initNavigation from './navigation';

export default () => {
  initTasks();
  initLearning();
  initVideos();
  initReview();
  initSlicky();
  initNavigation();
};
