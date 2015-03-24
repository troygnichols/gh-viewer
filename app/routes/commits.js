import AuthenticatedRoute from 'gh-viewer/routes/authenticated';

var ForksRoute = AuthenticatedRoute.extend({
  model: function() {
    var repo = this.modelFor('repository');
    var url = repo.commits_url.replace('{/sha}', '');
    return this.fetch(url);
  }
});

export default ForksRoute;
