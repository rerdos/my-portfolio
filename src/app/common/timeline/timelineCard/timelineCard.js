import template from './timelineCard.html';
import ngSanitize from 'angular-sanitize';

export default angular
  .module('app.common.timeline.timelineCard', [
    ngSanitize
  ])
  .component('appTimelineCard', {
    template,
    bindings: {
      card: '<'
    }
  })
  .name;