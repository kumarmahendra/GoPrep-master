'use strict';
angular.module('ionicApp')

.service('ContactService', function () {
    //to create unique contact id
    var uid = 1;
    
    //contacts array to hold list of all contacts
     var contacts = 
     [
            {
                "id":"0",
             "title": "ABOUT IIT MATH",
                        "LOS": [
                            {   
                                "id": "101",
                                "lo": "IIT MATH SYLLABUS",
                                "src": "images/lsnimg4.jpg",
                                "description": "Tips for IIT Preparation",
                                "content": "Content of IIT MATH SYLLABUS   "
                            },
                            {   
                                "id": "102",
                                "lo": "The timeline for IIT",
                                "src": "images/lsnimg3.jpg",
                                "description": "The timlines for preparation of IIT",
                                "content": "the content of timelines for iit prep"
                            },
                            {   
                                "id": "103",
                                "lo": "Score Requirements",
                                "src": "images/lsnimg2.jpg",
                                "description": "Tips for IIT Preparation Score Requirements",
                                "content": "The content of score requiremnt"
                            }
                        ]
                    
                
            },
            {
                
                "id":"1",
                        "title": "Probability",
                        "LOS": [
                            {   
                                "id": "104",
                                "lo": " Bayesian Analysis",
                                "src": "images/lsnimg1.png",
                                "description": "IIT Preparation for  Bayesian Analysis",
                                "content": "Content of  Bayesian Analysis"
                            },
                            {   
                                "id": "105",
                                "lo": " Birthday Problem",
                                "src": "images/lsnimg2.jpg",
                                "description": " Birthday Problem preparation of IIT",
                                "content": "the content of  Birthday Problem"
                            },
                            {   "id": "106",
                                "lo": "Chuck-a-Luck",
                                "src": "images/lsnimg3.jpg",
                                "description": "Chuck-a-Luck for IIT Preparation",
                                "content": "The content for Chuck-a-Luck"
                            }
                        ]
                    }

           /* {
                "id":"2",
             "title": "Permu & combi",
                        "LOS": [
                            {   
                                "id": "107",
                                "lo": "Factorial",
                                "src": "images/lsnimg4.jpg",
                                "description": "Factorialfor IIT Preparation",
                                "content": "Content of Factorial for IIT"
                            },
                            {
                                "id": "108",
                                "lo": "Generating Function",
                                "src": "images/lsnimg1.png",
                                "description": "Generating Function for preparation of IIT",
                                "content": "the content of Generating Function"
                            },
                            {   
                                "id": "109",
                                "lo": "Fibonacci Number",
                                "src": "images/lsnimg2.jpg",
                                "description": "Fibonacci Number for IIT Preparation",
                                "content": "The content of Fibonacci Number"
                            }
                        ]                    
                
            },
           {
                        "id":"3",     
                
                        "title": "Quadratic Eq.",
                       "LOS": [
                            {   
                                "id": "110",
                                "lo": "Polynomial",
                                "src": "images/lsnimg3.jpg",
                                "description": "Polynomial for IIT Preparation",
                                "content": "Content of Polynomial IIT MATH"
                            },
                            {   
                                "id": "111",
                                "lo": "Quadratic Formula",
                                "src": "images/lsnimg4.jpg",
                                "description": "Quadratic Formula for preparation of IIT",
                                "content": "the content of Quadratic Formula for iit prep"
                            },
                            {   
                                "id": "112",
                                "lo": "Geometric Mean",
                                "src": "images/lsnimg1.png",
                                "description": "Geometric Mean for IIT Preparation Score Requirements",
                                "content": "The content of Geometric Mean"
                            }
                        ]
                    },
            {
                "id":"4",
             "title": "Geometry",
                       "LOS": [
                            {   
                                "id": "113",
                                "lo": "IIT MATH SYLLABUS",
                                "src": "images/lsnimg2.jpg",
                                "description": "Tips for IIT Preparation",
                                "content": "Content of IIT MATH SYLLABUS"
                            },
                            {
                                "id": "114",
                                "lo": "The timlines for preparation of IIT",
                                "src": "images/lsnimg3.jpg",
                                "description": "The timlines for preparation of IIT",
                                "content": "the content of timelines for iit prep"
                            },
                            {
                                "id": "115",
                                "lo": "Score Requirements",
                                "src": "images/lsnimg4.jpg",
                                "description": "Tips for IIT Preparation Score Requirements",
                                "content": "The content of score requiremnt"
                            }
                        ]
                    
                
            },
            {
                "id":"5",
                
                        "title": "Algebra",
                        "LOS": [
                            {
                                "id": "116",
                                "lo": "Addition Theorm",
                                "src": "images/lsnimg1.png",
                                "description": "IIT Algebra Addition Theorm",
                                "content": "Content of IIT MATH SYLLABUS"
                            },
                            {
                                "id": "117",
                                "lo": "Multiplication Therom",
                                "src": "images/lsnimg2.jpg",
                                "description": "IIT Algebra Multiplication Therom",
                                "content": "the content of timelines for iit prep"
                            },
                            {
                                "id": "118",
                                "lo": "Bayes Theorm",
                                "src": "images/lsnimg3.jpg",
                                "description": "IIT Algebra Bayes Theorm",
                                "content": "The content of score requiremnt"
                            }
                        ]
                    } */
                    
                      
        ];        

    //simply returns the contacts list
    this.list = function () {
        return contacts;
    }
})

.service('losService', function () {
    //to create unique contact id
    var uid = 1;
    
    //contacts array to hold list of all contacts
    var  content= 
     [
                       {
                "id":"101",
             "title": "LO-1",
                        "LOS": [
                            {   
                                "id": "1",
                                "title": "Skill-1 ",
                                "src": "images/lsnimg4.jpg",
                                "description": "hare krishna",
                                "content": "Content of Skill 1  "
                            },

                            {   
                                "id": "2",
                                "title": "Skill-2",
                                "src": "images/lsnimg3.jpg",
                                "description": "The timlines for preparation of IIT",
                                "content": "the content of timelines for iit prep"
                            },
                            {   
                                "id": "3",
                                "title": "Skill-3",
                                "src": "images/lsnimg2.jpg",
                                "description": "Tips for IIT Preparation Score Requirements",
                                "content": "The content of score requiremnt"
                            }
                        ]
                    
                
            },
            {
                
                "id":"102",
                        "title": "LO-2",
                        "LOS": [
                            {   
                                "id": "1",
                                "title": "Skill-4",
                                "src": "images/lsnimg1.png",
                                "description": "IIT Preparation for  Bayesian Analysis",
                                "content": "Content of  Bayesian Analysis"
                            },
                            {   
                                "id": "2",
                                "title": "Skill-5",
                                "src": "images/lsnimg2.jpg",
                                "description": " Birthday Problem preparation of IIT",
                                "content": "the content of  Birthday Problem"
                            },
                            {   "id": "3",
                                "title": "Skill-6",
                                "src": "images/lsnimg3.jpg",
                                "description": "Chuck-a-Luck for IIT Preparation",
                                "content": "The content for Chuck-a-Luck"
                            }
                        ]
                    },

            {
                "id":"103",
             "title": "LO-3",
                        "LOS": [
                            {   
                                "id": "1",
                                "title": "Skill-7",
                                "src": "images/lsnimg4.jpg",
                                "description": "Factorialfor IIT Preparation",
                                "content": "Content of Factorial for IIT"
                            },
                            {
                                "id": "2",
                                "title": "Skill-8",
                                "src": "images/lsnimg1.png",
                                "description": "Generating Function for preparation of IIT",
                                "content": "the content of Generating Function"
                            },
                            {   
                                "id": "3",
                                "title": "Skill-9",
                                "src": "images/lsnimg2.jpg",
                                "description": "Fibonacci Number for IIT Preparation",
                                "content": "The content of Fibonacci Number"
                            }
                        ]                    
                
            },
            {
                        "id":"104",     
                
                        "title": "LO-4",
                       "LOS": [
                            {   
                                "id": "1",
                                "title": "Skill-10",
                                "src": "images/lsnimg3.jpg",
                                "description": "Polynomial for IIT Preparation",
                                "content": "Content of Polynomial IIT MATH"
                            },
                            {   
                                "id": "2",
                                "title": "Skill-11",
                                "src": "images/lsnimg4.jpg",
                                "description": "Quadratic Formula for preparation of IIT",
                                "content": "the content of Quadratic Formula for iit prep"
                            },
                            {   
                                "id": "3",
                                "title": "Skill-12",
                                "src": "images/lsnimg1.png",
                                "description": "Geometric Mean for IIT Preparation Score Requirements",
                                "content": "The content of Geometric Mean"
                            }
                        ]
                    },
            {
                "id":"105",
             "title": "LO-5",
                       "LOS": [
                            {   
                                "id": "1",
                                "title": "Skill-13",
                                "src": "images/lsnimg2.jpg",
                                "description": "Tips for IIT Preparation",
                                "content": "Content of IIT MATH SYLLABUS"
                            },
                            {
                                "id": "2",
                                "title": "Skill-14",
                                "src": "images/lsnimg3.jpg",
                                "description": "The timlines for preparation of IIT",
                                "content": "the content of timelines for iit prep"
                            },
                            {
                                "id": "3",
                                "title": "Skill-15",
                                "src": "images/lsnimg4.jpg",
                                "description": "Tips for IIT Preparation Score Requirements",
                                "content": "The content of score requiremnt"
                            }
                        ]
                    
                
            },
            {
                "id":"106",
                
                        "title": "LO-6",
                        "LOS": [
                            {
                                "id": "1",
                                "title": "Skill-16",
                                "src": "images/lsnimg1.png",
                                "description": "IIT Algebra Addition Theorm",
                                "content": "Content of IIT MATH SYLLABUS"
                            },
                            {
                                "id": "2",
                                "title": "Skill-17",
                                "src": "images/lsnimg2.jpg",
                                "description": "IIT Algebra Multiplication Therom",
                                "content": "the content of timelines for iit prep"
                            },
                            {
                                "id": "3",
                                "title": "Skill-18",
                                "src": "images/lsnimg3.jpg",
                                "description": "IIT Algebra Bayes Theorm",
                                "content": "The content of score requiremnt"
                            }
                        ]
                    }
                    
        ];        

    //simply returns the contacts list
    this.list = function () {
        return content;
    }
})





.controller('AccordionDemoCtrl', function ($scope,$stateParams, ContactService) {
  $scope.oneAtATime = true;
   
  $scope.modules = ContactService.list();
  
  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
})

.controller('AccordionCtrl', function ($rootScope,$scope,$stateParams, ContactService, losService,  $ionicModal) {
  $scope.oneAtATime = true;


   $scope.moduleId=$stateParams.moduleId;
  $scope.modules = ContactService.list();
  $rootScope.moduleId=$stateParams.moduleId;
  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

$scope.contents = losService.list();
    
      $ionicModal.fromTemplateUrl('templates/content.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
      //console.log(content.id);
    });
  $scope.openModal = function(content1){
    $scope.modal.show();
    $scope.contents=content1;
  }
  $scope.closeModal = function(){
    $scope.modal.hide();
  }
    
    
    
    
    
})

.controller('AccordionloCtrl', function ($rootScope,$scope,$stateParams, losService) {
  $scope.oneAtATime = true;

$scope.moduleId=$rootScope.moduleId;
   $scope.loId=$stateParams.loId;
 $scope.contents = losService.list();
  
  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
})
.controller('MediaCtrl', function($scope, $ionicModal) {

    $scope.allImages = [{
        'src' : 'images/pic1.jpg'
    }, {
        'src' : 'images/pic2.jpg'
    }, {
        'src' : 'images/pic3.jpg'
    }, {
        'src' : 'images/pic4.jpg'
    }, {
        'src' : 'images/pic5.jpg'
    }, {
        'src' : 'images/pic6.jpg'
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
})
.service('CourseService', function () {
    //to create unique contact id
    var uid = 1;
    
    //contacts array to hold list of all contacts
    var  Course= 
     [
           {
                "id": 0,
                "title": "calculus",
                "src":  "http://placehold.it/50x50",
                "pid": 174,
                "description": "xdadadad"
            },
         {
                "id": 1,
                "title": "calculus",
                "src":  "http://placehold.it/50x50",
                "pid": 174,
                "description": "xdadadad"
            },
         {
                "id": 2,
                "title": "calculus",
                "src":  "http://placehold.it/50x50",
                "pid": 174,
                "description": "xdadadad"
            },
         {
                "id": 4,
                "title": "calculus",
                "src":  "http://placehold.it/50x50",
                "pid": 174,
                "description": "xdadadad"
            },
         {
                "id": 5,
                "title": "calculus",
                "src":  "http://placehold.it/500x500",
                "pid": 174,
                "description": "xdadadad"
            },
         {
                "id": 6,
                "title": "calculus",
                "src":  "http://placehold.it/50x50",
                "pid": 174,
                "description": "xdadadad"
            },
         {
                "id": 7,
                "title": "calculus",
                "src":  "http://placehold.it/50x50",
                "pid": 174,
                "description": "xdadadad"
            },
         {
                "id": 8,
                "title": "calculus",
                "src":  "http://placehold.it/50x50",
                "pid": 174,
                "description": "xdadadad"
            }                 
        ];        

    //simply returns the contacts list
    this.list = function () {
        return Course;
    }
})
.controller('curriculumctrl', function($scope, CourseService) {
   $scope.Course = CourseService.list();
  
}).controller('MediaCtrl', function($scope, $ionicModal) {

    $scope.allImages = [{
        'src' : 'images/pic1.jpg'
    }, {
        'src' : 'images/pic2.jpg'
    }, {
        'src' : 'images/pic3.jpg'
    }, {
        'src' : 'images/pic4.jpg'
    }, {
        'src' : 'images/pic5.jpg'
    }, {
        'src' : 'images/pic6.jpg'
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
});










