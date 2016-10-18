app.controller('AuthCtrl', function($state, $scope, $rootScope, Auth) {
  // Authenticate then set currentUser in locastorage
  $scope.authenticate = function(creds){
    // Then authenticate
    Auth.authenticate(creds).then(function(user){
      $state.go('account')
    }).catch(function(err){
      console.log(err)
    })
  };
});
