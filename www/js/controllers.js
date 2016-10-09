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

.controller('ShowDetailCtrl', function($scope, $stateParams, $ionicModal, Shows) {
  $scope.show = Shows.get($stateParams.showId);
  
  $ionicModal.fromTemplateUrl('templates/modal-book.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    scope.modal.hide();
  };

  $scope.book = function(user_name, seats) {
    return Shows.book($stateParams.showId, user_name, seats)
    .then(function(booking) {
        console.log("Booking", booking);
        alert("Votre réservation a bien été enregistré jeune padawan, avec le numéro " + booking.id);
        $scope.closModal();
      })
  }
});

