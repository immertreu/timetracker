"use strict";angular.module("timetrackerApp",["firebase","ngResource","ngRoute","ngAnimate"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/date/:dateID",{templateUrl:"views/date.html",controller:"DateCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("timetrackerApp").controller("MainCtrl",["$scope","$firebase",function(a,b){var c=new Firebase("https://timetracker-dli.firebaseio.com/"),d=b(c);a.dates=d.$asArray()}]),angular.module("timetrackerApp").controller("DateCtrl",["$scope","$firebase","$routeParams","$location",function(a,b,c,d){var e=new Firebase("https://timetracker-dli.firebaseio.com/"+c.dateID),f=b(e);a.date=f.$asObject(),a.submitHours=function(b){a.hours.$invalid&&(b.preventDefault(),a.formSubmitted=!0)},a.saveHours=function(){a.date.$save({sunday:a.date.sunday,monday:a.date.monday,tuesday:a.date.tuesday,wednesday:a.date.wednesday,thursday:a.date.thursday,friday:a.date.friday,saturday:a.date.saturday}).then(function(){d.url("/")})}}]);