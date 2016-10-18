app.directive('featured', function(){
  return {
    restrict: 'E',
    scope: {
      items: '='
    },
    templateUrl: 'featured/featured.html',
    link: function(scope, elem, attr){
      scope.products = [
        1, 2, 3
      ]
      
      scope.services = [
        4, 5, 6
      ]

      scope.items = scope[attr.items]
    }
  }
})
