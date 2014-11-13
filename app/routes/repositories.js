import AuthenticatedRoute from 'gh-viewer/routes/authenticated';

var RepositoriesRoute = AuthenticatedRoute.extend({
  model: function() {
    var user = this.modelFor('user');
    return this.fetch(user.repos_url);
  }
});

export default RepositoriesRoute;
