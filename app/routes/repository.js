import AuthenticatedRoute from 'gh-viewer/routes/authenticated';

var RepositoryRoute = AuthenticatedRoute.extend({
  model: function(params) {
    var user = this.modelFor('user');
    var url = 'https://api.github.com/repos/' + user.login + '/' + params.reponame;
    return this.fetch(url);
  }
});

export default RepositoryRoute;
