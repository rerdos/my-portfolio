import template from './card.html';
import title from './../title/title.js';

export default angular
  .module('app.card', [
    title
  ])
  .component('appCard', {
    template,
    transclude: true,
    bindings: {
      titleText: '@',
      titleIcon: '@'
    }
  })
  .name;