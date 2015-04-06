(function ()
{
    var app = angular.module("w11");
    var baseUrl = "http://w01a.code8080.com/api/";

    var myController = function ($scope, $http)
    {
        $scope.categories_displayAll_test = function ()
        {
            $http.get(baseUrl + "Categories")
                .success(function (response)
                {
                    $scope.categoryInfo = response;
                }
            );
        }




    };

    app.controller("myController", ["$scope", "$http", "$routeParams", myController]);
}());

