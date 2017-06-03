import template from './timelineCard.html';

export default angular
  .module('app.common.timeline.timelineCard', [])
  .component('appTimelineCard', {
    template,
    bindings: {
      card: '<'
    }
  })
  .name;