'use strict'

angular.module('hiremyguideApp')
.config(function($stateProvider) {
  $stateProvider
  .state('main', {
    url: '/',
    templateUrl: 'client/main/main.view.ng.html',
    controller: 'MainCtrl'
  });
});