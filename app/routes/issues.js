import AuthenticatedRoute from 'gh-viewer/routes/authenticated';

var IssuesRoute = AuthenticatedRoute.extend({
  model: function() {
    var repo = this.modelFor('repository');
    var url = repo.issues_url.replace('{/number}', '');
    return this.fetch(url);
  }
});

export default IssuesRoute;
