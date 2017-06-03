import template from './timeline.html';
import timelineCard from './timelineCard/timelineCard.js';

export default angular
  .module('app.timeline', [
    timelineCard
  ])
  .component('appTimeline', {
    template,
    bindings: {
      timeline: '<'
    }
  })
  .name;