import Ember from 'ember';

var UserController = Ember.ObjectController.extend({
  mailto: function() {
    return 'mailto:' + this.get('email');
  }.property('email')
});

export default UserController;
