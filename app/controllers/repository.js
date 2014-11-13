import Ember from 'ember';

var RepositoryController = Ember.ObjectController.extend({
  needs: ['user'],
  user: Ember.computed.alias('controllers.user')
});

export default RepositoryController;
