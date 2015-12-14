'use strict';
angular.module('ionicApp')

.controller('lolistdisplay',function($rootScope,$scope)  
{
    
     $scope.goalmenufilter=function(lname)
 {
     
    $scope.q=lname;
     
     
     
 }
     
     
      $scope.lo = [
        { name: 'Maths' },
        { name: 'Physics' },
        { name: 'Chemistry' },
        { name: 'Chemistry' },
        { name: 'Chemistry' },
        { name: 'Physics' },
        { name: 'Maths' },
        { name: 'Chemistry' },
        { name: 'Maths' },
        { name: 'Physics' },
        { name: 'Physics' },
        { name: 'Maths' },
          
        { name: 'home' }
    ];
    
    
    
}
   );  