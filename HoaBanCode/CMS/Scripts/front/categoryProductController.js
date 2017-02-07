frontApp.controller("categoryProductController", ['$scope', '$http', '$window', 'CategoryProduct', function ($scope, $http, $window, CategoryProduct) {
    $scope.categoryProducts = [];
    $scope.products = [];
    $scope.idCategoryProduct = angular.element('#idCategoryProduct').val();
    $scope.product = {};

    //Lấy tất cả danh mục
    $http.get('/API/CategoryProductsAPI?att=idCategoryParent&&value=' + $scope.idCategoryProduct)
       .success(function (data) {
           $scope.categoryProducts = data;
       });

    $http.get('/API/ProductsAPI?att=idCategoryProduct&&value=' + $scope.idCategoryProduct)
       .success(function (data) {
           $scope.products = data;
       });
}]);