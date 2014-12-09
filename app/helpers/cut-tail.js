import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(value, options) {
  var maxLength = options.hash.max || 10;
  return  value.substring(0, maxLength);
});
