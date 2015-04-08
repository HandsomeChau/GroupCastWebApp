(function ()
{
    var app = angular.module("w11");
    var baseUrl = "http://groupcast.andrewhartline.com/api/";
    var loggedInStu = false;
    var loggedInTch = false;
    var header = {'Content-Type': 'sean.hodgies@gmail.com'};

    var myController = function ($scope, $http, $routeParams)
    {
        $scope.param = $routeParams.param;

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
            var postRequest = "{\"email\":\"" + email + "\"}";
            var length = 0;
            var userArray = null;
            document.cookie = ";path=/";
            loggedInStu = false;
            loggedInTch = false;

        $http.get(baseUrl + "Users/GetUsers")
                .success(function (response)
                {
                    userArray = response;
                    length = response.length;

                    $http.post(baseUrl + "Users/IdFromEmail", postRequest, header)
                        .success(function (response)
                        {
                            var idTemp = response;
                            for(var i = 0; i < length; i++)
                            {
                                if(userArray[i].id == idTemp)
                                {
                                    var userId = userArray[i].id;

                                    $http.post(baseUrl + "Users/GetUser", postRequest, header)
                                        .success(function (response)
                                        {
                                            document.cookie = "" + email + ";path=/;";
                                            console.log(document.cookie);

                                            if(response.roles[0] == 'Student')
                                            {
                                                loggedInStu = true;
                                                updateUserStatus();
                                                window.location.replace("#/coursesStu");
                                            }
                                            else if(response.roles[0] == 'Teacher')
                                            {
                                                loggedInTch = true;
                                                updateUserStatus();
                                                window.location.replace("#/pickGroupTch");
                                            }
                                            else
                                            {
                                                console.log("ERROR ON USER ROLE");
                                                window.location.replace("#/main");
                                            }
                                        }
                                    );
                                }
                            }
                        });
                });
        }

        $scope.logout = function()
        {
            alert("Get no scoped");
        }

        $scope.getAllMessagesForCourse = function()
        {
            var postRequest = "{\"email\":\"" + document.cookie + "\"}";
            $http.post(baseUrl + "Users/GetMessages", postRequest, header)
                .success(function (response)
                {
                    console.log(response);
                }
            );
        }

        $scope.sendMessage = function()
        {
            var message = document.getElementById('inputMessage').value;;
            var postRequest = "{\"email\":\"" + document.cookie + ", \"message\": \"" + message +"\"}";
            $http.post(baseUrl + "Users/AddMessages", postRequest, header)
                .success(function (response)
                {
                    console.log(response);
                }
            );
        }

        $scope.getAllStudentCourses = function (stuId)
        {
            var postRequest = "{\"email\":\"" + document.cookie + "\"}";
            $http.post(baseUrl + "Users/GetUser", postRequest, header)
                .success(function (response)
                {
                    $scope.courses = response.courses;
                    console.log(response.courses);
                }
            );
        }

        function updateUserStatus()
        {
            $scope.initUserType = "<div ng-init=\"loggedInTch = " + loggedInStu +"; loggedInStu = " + loggedInTch +"\"></div>";
            console.log("Changed user status to: Student = " + loggedInStu + " Teacher = " + loggedInTch);
        }

        $scope.getAllTeacherCourses = function()
        {
            var postRequest = "{\"email\":\"" + document.cookie + "\"}";
            $http.post(baseUrl + "Users/GetUser", postRequest, header)
                .success(function (response)
                {
                    $scope.courses = response.courses;
                    console.log(response.courses);
                }
            );
        }

    };

    app.controller("myController", ["$scope", "$http", "$routeParams", myController]);
}());

