app.config(function($locationProvider, $stateProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true).hashPrefix('!');
  $stateProvider
  .state('home', {
    url: '/',
    template: '<home></home>'
  })
})
