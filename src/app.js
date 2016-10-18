angular.module('app', ['ui.router', 'ngMaterial']);

var app = angular.module('app');

app.run(function($rootScope, Auth, $mdMedia, $window){
  $window.Stamplay.init('colorful')
  
  // check if current user to set rootscope accordingly
  $rootScope.$on('$stateChangeStart', function(){
    Auth.current().then(function(user){})
  })
  $rootScope.$on('loading:start', function (){
    $rootScope.isLoading = true;
  });
  $rootScope.$on('loading:finish', function (){
    $rootScope.isLoading = false;
  });
  $rootScope.$watch(function() {return $mdMedia('xs');}, function(xs) {
    $rootScope.mobile = (xs ? true : false)
  });
  $rootScope.$watch(function() {return $mdMedia('sm');}, function(sm) {
    $rootScope.tablet = (sm ? true : false)
  });
});
