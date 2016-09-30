;(function(ng) {
  'use strict';

  ng.module('angular-fullstack-yeoman')
    .config([
      '$locationProvider',
      function($locationProvider) {
        
        $locationProvider.html5Mode(true);
        
      }
    ]);
}(window.angular));
