import Ember from 'ember';

var githubUsername = '<YOUR GITHUB USERNAME>';
var githubPassword = '<YOUR GITHUB PASSWORD>';

var buildAuthHeader = function() {
  var base64EncodedCredentials = btoa(githubUsername + ':' + githubPassword);
  return 'Basic ' + base64EncodedCredentials;
};

var AuthenticatedRoute = Ember.Route.extend({
  fetch: function(url) {
    return Ember.$.ajax(url, {
      beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', buildAuthHeader());
      },
      error: function(xhr, reason) {
        console.log("Github API request failed", reason, xhr);
        alert("Can't talk to github...check credentials?");
      }
    });
  }
});

export default AuthenticatedRoute;
