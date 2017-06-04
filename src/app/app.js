import header from './header/header.js';
import content from './content/content.js';
import timeline from './common/timeline/timeline.js';
import skills from'./skills/skills.js';
import languages from'./languages/languages.js';
import location from './location/location.js';

angular.module('app', [
  header,
  timeline,
  content,
  skills,
  languages,
  location
]);