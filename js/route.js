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

  if (url[1] == "duda") {
    $scope.parameterDesktop = "https://my.duda.co/site/" + url[2] + "/?preview=true&dm_device=desktop";
    $scope.parameterTablet  = "https://my.duda.co/site/" + url[2] + "/?preview=true&dm_device=tablet";
    $scope.parameterMobile  = "https://my.duda.co/site/" + url[2] + "/?preview=true&dm_device=mobile";
    $scope.routeURL = "#/" + url[1] + "/" + url[2];
  } else if (url[1] == "site") {
    $scope.firstParameter = "//www." + url[2];
    $scope.routeURL = "#/" + url[1] + "/" + url[2];
  } else {
    $scope.firstParameter = "//www." + "logicalposition.com";
    $scope.routeURL = "";
  }


  //$scope.url = $sce.trustAsResourceUrl($scope.firstParameter);
  $scope.urlDesktop = (url[1] == "duda") ? $sce.trustAsResourceUrl($scope.parameterDesktop) : $sce.trustAsResourceUrl($scope.firstParameter);
  $scope.urlTablet = (url[1] == "duda") ? $sce.trustAsResourceUrl($scope.parameterTablet) : $sce.trustAsResourceUrl($scope.firstParameter);
  $scope.urlMobile = (url[1] == "duda") ? $sce.trustAsResourceUrl($scope.parameterMobile) : $sce.trustAsResourceUrl($scope.firstParameter);


}]);
