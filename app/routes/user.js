import AuthenticatedRoute from 'gh-viewer/routes/authenticated';

var UserRoute = AuthenticatedRoute.extend({
  model: function(params) {
    var url = 'https://api.github.com/users/' + params.login;
    return this.fetch(url);
  }
});

export default UserRoute;
