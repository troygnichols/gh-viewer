import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('user', { path: '/users/:login' }, function() {
    this.resource('repositories');
    this.resource('repository', { path: 'repositories/:reponame' }, function() {
      this.resource('issues');
      this.resource('forks');
      this.resource('commits');
    });
  });
});

export default Router;
