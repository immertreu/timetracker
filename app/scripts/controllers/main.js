'use strict';

/*Controller governing week selection view on homepage*/

angular.module('timetrackerApp')
  .controller('MainCtrl', ['$scope', '$firebase', function($scope, $firebase) {
    var firebaseUrl = new Firebase('https://timetracker-dli.firebaseio.com/');
     
    var sync = $firebase(firebaseUrl);
     
    $scope.dates = sync.$asArray();
    
    $scope.pageClass = 'page-main';

  }]);