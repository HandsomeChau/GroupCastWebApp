(function ()
{
    var app = angular.module("w11");
    var baseUrl = "http://w01a.code8080.com/api/";

    var myController = function ($scope, $http)
    {
        $scope.categories_create = function ()
        {
            var name = $scope.cat_name;
            var description = $scope.cat_description
            var data = JSON.stringify({CategoryName: name, Description: description});
            $http.post(baseUrl + "Categories", data)
                .success(function (response)
                {
                    $scope.response = "Created Category " + name;
                }
            );
        }

        $scope.categories_delete = function ()
        {
            var id = $scope.cat_id;
            $http.delete(baseUrl + "Categories/" + id)
                .success(function (response)
                {
                    $scope.response = "Deleted Category " + id;
                }
            );
        }

        $scope.categories_displayAll = function ()
        {
            $http.get(baseUrl + "Categories")
                .success(function (response)
                {
                    $scope.categoryInfo = response;
                }
            );
        }

        $scope.categories_update = function ()
        {

            var id = $scope.cat_id;
            var name = $scope.cat_name;
            var description = $scope.cat_description
            var data = JSON.stringify({CategoryID: id, CategoryName: name, Description: description});
            $http.put(baseUrl + "Categories/" + id, data)
                .success(function (response)
                {
                    $scope.response = "Updated Category " + id;
                }
            );
        }
    };

    app.controller("myController", ["$scope", "$http", "$routeParams", myController]);
}());

