import template from './header.html';
import headerData from './../../data/header.json';

class HeaderCtrl {
  $onInit() {
    const $ctrl = this;

    $ctrl.data = headerData;
  }
}

export default angular
  .module('app.header', [])
  .component('appHeader', {
    template,
    controller: HeaderCtrl
  })
  .name;