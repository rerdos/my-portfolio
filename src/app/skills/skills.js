import template from './skills.html';
import card from './../common/card/card.js';
import tags from './../common/tags/tags.js';

export default angular
  .module('app.skills', [
    card,
    tags
  ])
  .component('appSkills', {
    template,
    bindings: {
      tags: '<'
    }
  })
  .name;