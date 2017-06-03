import template from './content.html';
import timelines from './../../data/timelines.json';

class ContentCtrl {
  $onInit() {
    const $ctrl = this;

    $ctrl.timelines = timelines;
  }
}

export default angular
  .module('app.content', [])
  .component('appContent', {
    template,
    controller: ContentCtrl
  })
  .name;