angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope', 'gitService', '$ionicLoading', '$filter', function ($scope, gitService, $ionicLoading, $filter) {

    $scope.Commits = [];
    $scope.CommitArr = [];
    $scope.getGitCommits = function () {

        $ionicLoading.show({
            content: 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });

        function highLight(commitssh) {
            var lastChar = commitssh.substr(commitssh.length - 1);
            return !isNaN(lastChar);
        }

        $scope.filterRecords = function ($event) {
            var input = angular.element($event.target);
            var search = input.val();
            if (search != "") {
                var result = [];
                var result = $filter('filter')($scope.CommitArr, search);
                $scope.Commits = result;
            }
            else {
                $scope.Commits = $scope.CommitArr;
            }
        }

        gitService.getCommits()
        .then(function (results) {
            $scope.CommitArr = [];
            angular.forEach(results, function (result) {

                var highLght = highLight(result.sha) ? "highlighted" : "";

                $scope.CommitArr.push({
                    sha: result.sha,
                    author: result.author,
                    committer: result.committer,
                    message: result.commit.message,
                    highlighted: highLght
                });

            });
            $scope.Commits = $scope.CommitArr;
            $ionicLoading.hide();
        });
    };

    $scope.getGitCommits();
}])

.controller('FriendsCtrl', function ($scope, Friends) {
    $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function ($scope, $stateParams, Friends) {
    $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function ($scope) {
});
