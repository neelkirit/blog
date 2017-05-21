var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "template/home.htm"
  })
  .when("/post", {
    templateUrl : "template/post.htm"
  });
});