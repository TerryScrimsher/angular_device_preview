/**
 * Created by Namita Malik on 29/1/15.
 */
var module = angular.module("myApp", ['ngRoute']);

// module.config(['$routeProvider', function ($routeProvider) {
//     $routeProvider
//         .when('/desktop', {
//             templateUrl: 'desktop.html',
//             controller: 'RoutingController'
//         })
//         .otherwise({
//           templateUrl: 'index.html',
//           controller: 'RoutingController'
//         });
// }]);

module.controller("RoutingController", ['$scope', '$sce', '$location', function ($scope, $sce, $location) {

  var url = $location.path().split('/');
  if (url[1]) {
    $scope.firstParameter = "https://www." + url[1];
    $scope.routeURL = "#/" + url[1];
  } else {
    $scope.firstParameter = "https://www." + "logicalposition.com";
    $scope.routeURL = "";
  }

  $scope.url = $sce.trustAsResourceUrl($scope.firstParameter);


}]);
