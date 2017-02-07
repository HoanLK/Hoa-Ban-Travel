frontApp.controller("kmController", ['$scope', '$http', '$window', '$sce', function ($scope, $http, $window, $sce) {
    $scope.kms = {};

    //Lấy tin khuyến mại
    $http.get('/API/PostsAPI?att=baiVietMoibyCatgory&&value=' + 6)
        .success(function (data) {
            $scope.kms = data;
        });
}]);