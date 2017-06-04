import template from './list.html';

export default angular
  .module('app.common.list', [])
  .component('appList', {
    template,
    bindings: {
      list: '<'
    }
  })
  .name