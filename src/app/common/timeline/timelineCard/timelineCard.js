import template from './timelineCard.html';

export default angular
  .module('appTimelineCard', [])
  .component('appTimelineCard', {
    template,
    bindings: {
      card: '<'
    }
  })
  .name;