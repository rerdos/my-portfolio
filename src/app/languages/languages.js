import template from './languages.html';
import card from './../common/card/card.js';
import list from './../common/list/list.js';
import languages from './../../data/languages.json';

class LanguagesCtrl {
  $onInit() {
    const $ctrl = this;

    $ctrl.list = languages;
  }
}

export default angular
  .module('app.languages', [
    card,
    list
  ])
  .component('appLanguages', {
    template,
    controller: LanguagesCtrl
  })
  .name;