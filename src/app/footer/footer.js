import template from './footer.html';
import { getCopyrightDuration } from './footer.factory.js';
import footer from './../../data/footer.json';

class FooterCtrl {

  $onInit() {
    const $ctrl = this;

    $ctrl.name = footer.name;
    $ctrl.interval = getCopyrightDuration(footer.created_in)
  }
}

export default angular
  .module('app.footer', [])
  .component('appFooter', {
    template,
    controller: FooterCtrl
  })
  .name;