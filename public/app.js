angular.module("app",["ui.router"]);const app=angular.module("app");app.run(["$rootScope","$state",function(a,o){a.$state=o,console.log("app is running!")}]);

app.config(["$locationProvider","$stateProvider","$urlRouterProvider",function(e,o,r){e.html5Mode(!0).hashPrefix("!"),o.state("home",{url:"/",template:"<home></home>"})}]);
app.directive("home",function(){return{restrict:"E",templateUrl:"home/home.html",controller:["$scope",function(e){e.message="Hi man, this is the home page"}]}});