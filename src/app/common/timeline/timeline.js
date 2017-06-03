import template from './timeline.html';
import title from './../title/title.js';
import timelineCard from './timelineCard/timelineCard.js';

export default angular
  .module('app.common.timeline', [
    title,
    timelineCard
  ])
  .component('appTimeline', {
    template,
    bindings: {
      timeline: '<'
    }
  })
  .name;