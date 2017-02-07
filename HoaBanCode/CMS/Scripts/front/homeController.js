frontApp.controller("homeController", ['$scope', '$http', '$window', 'CategoryProduct', function ($scope, $http, $window, CategoryProduct) {
    $scope.spMois = [];
    $scope.products = [];

    //Lấy tất cả danh mục
    $http.get('/API/CategoryProductsAPI?att=idCategoryParent&&value=' + $scope.idCategoryProduct)
       .success(function (data) {
           $scope.categoryProducts = data;
       });

    $http.get('/API/ProductsAPI?att=spMoi&&value=' + 1)
       .success(function (data) {
           $scope.spMois = data;
       });
}]);