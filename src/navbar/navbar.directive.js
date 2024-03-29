app.directive('navbar', function() {
  return {
    restrict: 'E',
    templateUrl: 'navbar/navbar.html',
    controller: function($scope, $timeout, $mdSidenav, $log){
      var buildDelayedToggler, buildToggler, debounce
      // mainmenu
      $scope.mainmenu = [
        {
          link: 'Shops & Stories',
          state: 'shops',
          icon: 'home'
        },
        {
          link: 'Products',
          state: 'products',
          icon: 'description'
        },
        {
          link: 'Services',
          state: 'services',
          icon: 'description'
        }
      ];
      // authmenu
      $scope.authmenu = [
        {
          link: 'Profile',
          state: 'profile',
          icon: 'assignment_ind'
        },
        {
          link: 'Account',
          state: 'account',
          icon: 'settings'
        },
        {
          link: 'Logout',
          state: 'logout',
          icon: 'person'
        }
      ];
      debounce = function(func, wait, context) {
        var timer;
        timer = void 0;
        return function() {
          var context;
          var args;
          context = $scope;
          args = Array.prototype.slice.call(arguments);
          $timeout.cancel(timer);
          timer = $timeout((function() {
            timer = void 0;
            func.apply(context, args);
          }), wait || 10);
        };
      };
      buildDelayedToggler = function(navID) {
        return debounce((function() {
          $mdSidenav(navID).toggle().then(function() {
            $log.debug('toggle '+navID+' is done');
          });
        }), 200);
      };
      buildToggler = function(navID) {
        return function() {
          $mdSidenav(navID).toggle().then(function() {
            $log.debug('toggle '+navID+' is done');
          });
        };
      };
      $scope.toggleLeft = buildDelayedToggler('left');
      $scope.isOpenLeft = function() {
        return $mdSidenav('left').isOpen();
      };
      $scope.closeLeft = function() {
        $mdSidenav('left').close().then(function() {
          $log.debug('close LEFT is done');
        });
      };
      $scope.toggleRight = buildToggler('right');
      $scope.isOpenRight = function() {
        return $mdSidenav('right').isOpen();
      };
      $scope.closeRight = function() {
        $mdSidenav('right').close().then(function() {
          $log.debug('close RIGHT is done');
        });
      };
    }
  };
});
