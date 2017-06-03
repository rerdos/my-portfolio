import template from './tags.html';

export default angular
  .module('app.common.tags', [])
  .component('appTags', {
    template,
    bindings: {
      tags: '<'
    }
  })
  .name;