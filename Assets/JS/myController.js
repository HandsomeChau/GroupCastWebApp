(function ()
{
    var app = angular.module("w11");
    var baseUrl = "http://groupcast.andrewhartline.com/api/";

    var myController = function ($scope, $http)
    {
        $scope.categories_displayAll_test = function ()
        {
            $http.get(baseUrl + "")
                .success(function (response)
                {
                    $scope.categoryInfo = response;
                }
            );
        }

        $scope.getAllStudentCourses = function ()
        {
            $http.get(baseUrl = "")
                .success(function (response)
                {
                    $scope.courses = response;
                }
            );
        }

        $scope.sendToCheckCourses = function ()
        {
            var checkedCourses = $scope.null()
            alert("Courses Received TEST");
        }


    };

    app.controller("myController", ["$scope", "$http", "$routeParams", myController]);
}());

