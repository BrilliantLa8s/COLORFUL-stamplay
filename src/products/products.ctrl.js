app.controller('ProductsCtrl', function($scope, data){
  $scope.products = data;
  $scope.colors = [
    'primary',
    'accent',
    'blue',
    'yellow',
    'warn'
  ]
})
