import Ember from 'ember';

var IndexRoute = Ember.Route.extend({
  model: function() {
    return [
      { name: 'Rob Conery',   login: 'robconery' },
      { name: 'Troy Nichols', login: 'troygnichols' },
      { name: 'Ryan Thames',  login: 'ryanthames' },
      { name: 'Tom Dale',     login: 'tomdale' },
      { name: 'OC Software',  login: 'ocsoftware' }
    ];
  }
});

export default IndexRoute;
