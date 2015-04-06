(function ()
{
    var app = angular.module('w11', ["ngRoute"]);

    app.config(function ($routeProvider)
    {
        $routeProvider
            .when("/main", {
                templateUrl: "/Views/main.html",
                controller: "myController"
            })
            .when("/login", {
                templateUrl: "/Views/Account/login.html",
                controller: "myController"
            })
            .when("/forgotPassword", {
                templateUrl: "/Views/Account/forgotPassword.html",
                controller: "myController"
            })
            .when("/sendEmail", {
                templateUrl: "/Views/Account/sendEmail.html",
                controller: "myController"
            })
            .when("/register", {
                templateUrl: "/Views/Account/register.html",
                controller: "myController"
            })
            .when("/dashboard", {//May not use
                templateUrl: "/Views/dashboard.html",
                controller: "myController"
            })
            .when("/group", {
                templateUrl: "/Views/group.html",
                controller: "myController"
            })
            .when("/sendMessage", {
                templateUrl: "/Views/sendMessage.html",
                controller: "myController"
            })
            .when("/receiveMessage", {
                templateUrl: "/Views/receiveMessage.html",
                controller: "myController"
            })
            .otherwise({redirectTo: "/main"});
    });
}());