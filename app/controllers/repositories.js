import Ember from 'ember';

var RepositoriesController = Ember.ArrayController.extend({
  needs: ['user'],
  user: Ember.computed.alias('controllers.user')
});

export default RepositoriesController;
