angular.module('app').run(['$templateCache', function($templateCache) {$templateCache.put('home/home.html','<div>{{message}}</div>\r\n');}]);