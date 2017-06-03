import template from './title.html';

export default angular
  .module('app.common.title', [])
  .component('appTitle', {
    template,
    bindings: {
      icon: '<',
      text: '<'
    }
  })
  .name;