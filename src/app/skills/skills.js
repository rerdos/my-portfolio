import template from './skills.html';
import card from './../common/card/card.js';
import tags from './../common/tags/tags.js';
import skills from './../../data/skills.json';

class SkillsCtrl {
  $onInit() {
    const $ctrl = this;

    $ctrl.tags = skills;
  }
}

export default angular
  .module('app.skills', [
    card,
    tags
  ])
  .component('appSkills', {
    template,
    controller: SkillsCtrl
  })
  .name;