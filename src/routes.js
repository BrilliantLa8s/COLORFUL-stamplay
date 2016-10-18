app.config(function($locationProvider, $stateProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true).hashPrefix('!');
  $stateProvider
  .state('main', {
    url:'/',
    templateUrl: 'main/main.html',
    controller: 'MainCtrl'
  })
  .state('shops', {
    url:'/shops',
    templateUrl: 'shops/shops.html',
    controller: 'ShopsCtrl'
  })
  .state('shop', {
    url:'/shops/:shop',
    templateUrl: 'shops/shop.html',
    controller: 'ShopCtrl'
  })
  .state('products', {
    url:'/products',
    templateUrl: 'products/products.html',
    controller: 'ProductsCtrl',
    resolve: {
      data: function(Product){
        return Product.all().then(function(data){
          return data;
        }).catch(function(err){return;})
      }
    }
  })
  .state('services', {
    url:'/services',
    template: 'services'
  })
  .state('account', {
    url:'/account',
    templateUrl: 'account/index.html',
    controller: 'AccountCtrl'
  })
  .state('account.update', {
    url:'/update',
    templateUrl: 'account/update.html',
    controller: 'AccountCtrl'
  })
  .state('account.identities', {
    url:'/identities',
    templateUrl: 'account/identities/identities.html',
    controller: 'IdentitiesCtrl'
  })
  .state('account.settings', {
    url:'/settings',
    templateUrl: 'account/settings/settings.html',
    controller: 'AccountCtrl'
  })
  .state('account.support', {
    url:'/support',
    templateUrl: 'account/support/support.html',
    controller: 'AccountCtrl'
  })
  .state('login', {
    url:'/login',
    templateUrl: 'auth/login.html'
  })
  .state('register', {
    url:'/register',
    templateUrl: 'auth/register.html'
  })
  .state('logout', {
    url:'/logout',
    templateProvider: function(Auth){
      Auth.logout();
    }
  });

  // catchall route
  $urlRouterProvider.otherwise('/');
});
