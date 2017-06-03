import header from './header/header.js';
import content from './content/content.js';
import timeline from './common/timeline/timeline.js';
import card from './common/card/card.js';

angular.module('app', [
  header,
  timeline,
  content,
  card
]);