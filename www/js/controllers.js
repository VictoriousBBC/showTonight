angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ShowsCtrl', function($scope, Shows) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.shows = [];
    Shows.all().then(function(apiShows) {
      $scope.shows = apiShows;
    });
})

.controller('ShowDetailCtrl', function($scope, $stateParams, Shows) {
  $scope.show = Shows.get($stateParams.showId);
});


