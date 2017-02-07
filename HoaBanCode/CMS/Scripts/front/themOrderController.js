frontApp.controller("themOrderController", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    $scope.order = {};
    $scope.idProduct = angular.element('#idProductCurrent').val();
    $scope.price;

    //INIT
    Init();

    //Lưu Order
    $scope.SaveOrder = function () {
        $scope.order.checked = 0;
        $scope.order.idProduct = $scope.idProduct;
        $http.post('/API/OrderAPI/', $scope.order)
        .success(function () {
            toastr.success('Thành công', 'Đặt hàng');
        })
        .error(function () {
            toastr.error('Thất bại', 'Đặt hàng');
        });
    }

    function Init() {
        $http.get('/API/ProductsAPI/' + $scope.idProduct)
            .success(function (product) {
                $scope.order.sanPham = product.title;
                $scope.price = product.price;
            })
    }
}]);