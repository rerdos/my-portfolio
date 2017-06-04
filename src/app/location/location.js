import template from './location.html';
import card from './../common/card/card.js';

export default angular
  .module('app.location', [
    card
  ])
  .component('appLocation', { template })
  .name;