 
'use strict';
angular.module('ionicApp')

.controller('goallist',['$rootScope', "$scope",
"$stateParams", "$q", "$location", "$window", '$timeout','$ionicModal',
function($rootScope, $scope, $stateParams, $q, $location, $window,
$timeout,$ionicModal)

{
   
    $scope.tabs = [
{"text" : "Month"},
{"text" : "Week"},
{"text" : "Today"},
{"text" : "Physics"},
{"text" : "Chemistry"},
{"text" : "Maths"}



];
$scope.onSlideMove = function(data){
//alert("You have selected " + data.index + " tab");
};

 $scope.allImages = [{
        'src' : 'images/pic1.jpg'
    }, {
        'src' : 'images/pic2.jpg'
    }, {
        'src' : 'images/pic3.jpg'
    }];

    $scope.clipSrc = 'images/coffee.MOV';

    $scope.showImages = function(index) {
        $scope.activeSlide = index;
        $scope.showModal('templates/image-popover.html');
    }

    $scope.playVideo = function() {
        $scope.showModal('templates/video-popover.html');
    }

    $scope.showModal = function(templateUrl) {
        $ionicModal.fromTemplateUrl(templateUrl, {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    }

    // Close the modal
    $scope.closeModal = function() {
        $scope.modal.hide();
        $scope.modal.remove()
    };

}
        
        ]);
 