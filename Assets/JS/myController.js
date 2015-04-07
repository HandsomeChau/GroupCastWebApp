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

        $scope.login = function()
        {
            var email = document.getElementById('inputEmail').value;
            var header = {'Content-Type': 'sean.hodgies@gmail.com'};
            var postRequest = "{\"email\":\"" + email + "\"}";
            var length = 0;
            var userArray = null;

            $http.get(baseUrl + "Users/GetUsers")
                .success(function (response)
                {
                    userArray = response;
                    length = response.length;

                });
            console.log(userArray);


            $http.post(baseUrl + "Users/IdFromEmail", postRequest, header)
                .success(function (response)
                {
                    console.log(response);
                    //ToDo cross reference email with usename, else fail and return to login
                    //$cookie.userId = 0 //Cross referenced value.
                });

            for(var i = 0; i < length; i++)
            {
                console.log(userArray[i]);
            }

        }

        $scope.getMessagesForCourse = function()
        {
            $http.get(baseUrl + "TODO api call to get messages of stu for course")
        }

        $scope.getAllStudentCourses = function (stuId)
        {
            $http.get(baseUrl = "TODO" + stuId)
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

