app.config(function($sceProvider, $httpProvider){
  // prevent browsers(IE) from caching $http responses
  if (!$httpProvider.defaults.headers.get) {
    $httpProvider.defaults.headers.get = {
      'Cache-Control':'no-cache',
      'Pragma':'no-cache'
    };
  };

  $sceProvider.enabled(false);

  // Inject auth token into the headers of each request
  $httpProvider.interceptors.push(function($q, $location, $rootScope) {
    return {
      request: function(config) {
        $rootScope.$broadcast('loading:start');
        return config || $q.when(config);
      },
      response: function (response) {
        $rootScope.$broadcast('loading:finish');
        return response || $q.when(response);
      },
      responseError: function(response) {
        $rootScope.$broadcast('loading:finish');
        return $q.reject(response);
      }
    };
  });
});
