angular.module('starter.services', [])
    .constant("gitConfig", {
        "url": "https://api.github.com/repos/",
        "repo": "joyent/node",
        "api": "/commits",
        "access_token": "?access_token=923d2495947cdd649d8adfb50696d76b8c685b3c"
    })
/**
 * A simple example service that returns some data.
 */
.factory('gitService', function (gitConfig, $http, $q) {

    return {
        getCommits: function () {

            var gitUrl = gitConfig.url + gitConfig.repo + gitConfig.api;

            var defer = $q.defer();

            $http.get(gitUrl).
              success(function (data, status, headers, config) {
                  defer.resolve(data);
              }).
              error(function (data, status, headers, config) {
                  defer.reject();
              });

            return defer.promise;
        }
    }
});
