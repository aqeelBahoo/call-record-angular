/**
 * Created by Home on 7/26/2017.
 */
var module = angular.module("myApp", ["ngRoute"])
module.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");

    $routeProvider.otherwise({redirecTo: "/home"});

    $routeProvider.when("/my-account",{
        templateUrl: "my-account-form.html"
    })

    $routeProvider.when("/group-detail",{
        templateUrl: "group-detail.html"
    })

    $routeProvider.when("/history", {
        templateUrl: "history.html"
    })
    $routeProvider.when("/login",{
        templateUrl: "login.html"
    })
    $routeProvider.when("/user-list", {
        templateUrl: "user-list.html"
    })
    $routeProvider.when("/home", {
        templateUrl: "home.html"
    })
})