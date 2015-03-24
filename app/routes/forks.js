import AuthenticatedRoute from 'gh-viewer/routes/authenticated';

var ForksRoute = AuthenticatedRoute.extend({
  model: function() {
    var repo = this.modelFor('repository');
    return this.fetch(repo.forks_url);
  }
});

export default ForksRoute;
