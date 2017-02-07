frontApp.controller("categoryPostController", ['$scope', '$http', '$window', 'CategoryPost', function ($scope, $http, $window, CategoryPost) {
    $scope.categoryPosts = [];
    $scope.posts = [];
    $scope.idCategory = angular.element('#idCategory').val();

    //Lấy tất cả danh mục
    $http.get('/API/CategoriesAPI?att=idCategoryParent&&value=' + $scope.idCategory)
        .success(function (data) {
            $scope.categoryPosts = data;
        })

    //bài viết trong danh mục con
    $http.get('/API/PostsAPI?att=idCategory&&value=' + $scope.idCategory)
       .success(function (data) {
           $scope.posts = data;
       });
}]);