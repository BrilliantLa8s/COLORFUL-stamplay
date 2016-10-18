app.factory('Auth', function($q, $window, $rootScope){
  var User = $window.Stamplay.User;
  return {
    current: function(){
      return $q(function(resolve, reject){
        User.currentUser(function(err, resp){
          if(err){
            reject(err.message);
          } else {
            if(angular.equals(resp, {})){
              resolve(resp);
            } else if(resp.user){
              delete resp.user.password;
              $rootScope.currentUser = resp.user;
              resolve(resp.user);
            }
          }
        });
      });
    },
    authenticate: function(data){
      return $q(function(resolve, reject){
        User[data.type](data, function(err, resp){
          if(err){
            reject(JSON.parse(err.message).error);
          } else {
            if(resp.password) delete resp.password;
            $rootScope.currentUser = resp;
            resolve(resp);
          }
        });
      });
    },
    logout: function(){
      User.logout(true, function(err, resp){
        $window.location.href = '/'
      });
    }
  };
});
