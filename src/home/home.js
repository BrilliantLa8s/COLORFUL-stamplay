app.directive('home', function(){
  return {
    restrict: 'E',
    templateUrl: 'home/home.html',
    controller: function($scope){
      $scope.message = 'Hi man, this is the home page'
    }
  }
})
