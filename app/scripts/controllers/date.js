'use strict';

/*Controller governing hour entry form*/

angular.module('timetrackerApp')
  .controller('DateCtrl', ['$scope', '$firebase','$routeParams', '$location', function($scope, $firebase, $routeParams, $location){

    var firebaseUrl = new Firebase('https://timetracker-dli.firebaseio.com/' + $routeParams.dateID);

    var sync = $firebase(firebaseUrl);

    $scope.date = sync.$asObject();

    /*Validates form*/
    $scope.submitHours = function(e) {
      if ($scope.hours.$invalid) {
        e.preventDefault();
        $scope.formSubmitted = true;  
      }
    };

    /*Saves field values and returns to main view*/
    $scope.saveHours = function() {
      $scope.date.$save({
        sunday: $scope.date.sunday,
        monday: $scope.date.monday,
        tuesday: $scope.date.tuesday,
        wednesday: $scope.date.wednesday,
        thursday: $scope.date.thursday,
        friday: $scope.date.friday,
        saturday: $scope.date.saturday,
      }).then(function(){
        $location.url('/');
      });
    };

    $scope.pageClass = 'page-date';
  }]);

  //