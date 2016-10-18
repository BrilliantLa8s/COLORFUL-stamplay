angular.module('app', ['ui.router']);

const app = angular.module('app')

app.run(function($rootScope, $state){
  $rootScope.$state = $state;
  console.log('app is running!')
})
