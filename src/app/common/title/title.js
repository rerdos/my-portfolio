import template from './title.html';

export default angular
  .module('app.title', [])
  .component('appTitle', {
    template,
    bindings: {
      icon: '<',
      text: '<'
    }
  })
  .name;