var myApp = angular.module('myApp', []);
myApp.controller('ImgController', function ($http) {
    var vm = this;

    vm.imgContainer = {
        data: []
    };


    vm.sendImg = function () {
        console.log('click');
        $http({
            url: '/giphy/'+vm.searchIn,
            method: 'GET'
        }).then(function (resp) {
            vm.imgContainer.data = resp.data.data[0].url;
            console.log(vm.imgContainer.data);
        });
    };


});