import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(foo) {
  // moment.js is installed via ember-cli-moment which makes it
  // globally accessible
  var today = moment();
  var target = moment(foo);
  return target.from(today);
});
