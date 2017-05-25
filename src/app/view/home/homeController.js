angular.module('carTrip')
    .controller('homeController', function ($window, $location) {
        var homeControllerVM = this;

        var code=$location.search().code;
        
        console.log(code);

    });