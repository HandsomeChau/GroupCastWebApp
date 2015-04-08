(function ()
{
    var app = angular.module('w11', ["ngRoute"]);

    app.config(function ($routeProvider)
    {
        $routeProvider
            .when("/main", {
                templateUrl: "/Views/Account/main.html",
                controller: "myController"
            })
            .when("/logIn", {
                templateUrl: "/Views/Account/logIn.html",
                controller: "myController"
            })
            .when("/logOut", {
                templateUrl: "/Views/Account/logOut.html",
                controller: "myController"
            })
            .when("/coursesStu", {
                templateUrl: "/Views/student/coursesStu.html",
                controller: "myController"
            })
            .when("/viewMessageStu/:param", {
                templateUrl: "/Views/student/viewMessageStu.html",
                controller: "myController"
            })
            .when("/pickGroupTch", {
                templateUrl: "/Views/teacher/pickGroupsTch.html",
                controller: "myController"
            })
            .when("/sendMessage", {
                templateUrl: "/Views/teacher/sendMessageTch.html",
                controller: "myController"
            })
            .when("/setMethod", {
                templateUrl: "/Views/student/setMethodStun.html",
                controller: "myController"
            })
            .otherwise({redirectTo: "/main"});
    });
}());