ionic.Gestures.gestures.Hold.defaults.hold_threshold = 20;



var app=angular.module('ionicApp', ['app.mcsas','ionic','akoenig.deckgrid','ionic-datepicker','chartjs-directive','angular-select-text','sortable1','d3','tabSlideBox']);

app.run(['$q', '$http', '$rootScope', '$location', '$window', '$timeout',
function($q, $http, $rootScope, $location, $window, $timeout){

        $rootScope.$on("$locationChangeStart", function(event, next,
current){
            $rootScope.error = null;
            console.log("Route change!!!", $location.path());
            var path = $location.path();


            console.log("App Loaded!!!");
        });
    }
    ]);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "event-menu.html"
    })
    .state('eventmenu.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "home.html"
        }
      }
    })
    
     .state('eventmenu.homelist', {
      url: "/homelist",
      views: {
        'menuContent' :{
          templateUrl: "templates/homescreen.html"
        }
      }
    })
    
    
       .state('eventmenu.goalsmenu', {
      url: "/goalsmenu",
      views: {
        'menuContent' :{
          templateUrl: "templates/goalsmenu.html"
        }
      }
    })
  
  .state('eventmenu.homelist.performance', {
      url: "/performance",
      views: {
        'performance' :{
          templateUrl: "templates/performance.html",
            controller: 'goallist'
            
        }
      }
    })
  
  
  .state('eventmenu.homelist.goals', {
      url: "/goals",
      views: {
        'goals' :{
          templateUrl: "templates/goal.html",
            controller:'lolistdisplay'
        }
      }
    })
  
    
    
    
    .state('eventmenu.curriculum', {
      url: "/curriculum",
      views: {
        'menuContent' :{
          templateUrl: "templates/curriculum.html",
          controller: "curriculumctrl"
        }
      }
    })
  .state('eventmenu.base', {
      url: "/base",
      views: { 
        'menuContent': {
          templateUrl: "templates/tpl-nested-base.html"    
        } 
      }
    })


      

     .state('eventmenu.base.content', {
      url: '/content',
      views: {

        // Side Menu
        'side-view': {
          templateUrl: 'templates/tpl-nested-menu.html',
          controller: 'AccordionDemoCtrl'
        },
        'content-view': {
          templateUrl: 'templates/tpl-nested-contentmenu.html'
          
        }
      }
    })
     .state('eventmenu.base.content.module', {
      url: '/{moduleId:[0-9]{1,4}}',
views: {
  'content-lo': {
            templateUrl: 'templates/mainView.html',
            controller: 'AccordionCtrl' 
  }
         }
    })


      .state('eventmenu.lo', {
      url: "/{loId:[0-9]{1,4}}",
      views: { 
        'menuContent': {
          templateUrl: "templates/basecontent.html" ,
            controller: 'AccordionloCtrl' 
        } 
      }
    })
    .state('eventmenu.math', {
      url: "/math",
      views: {
        'menuContent' :{
          templateUrl: "sidemenu/math.html",
          controller: "AccordionDemoCtrl"
        }
      }
    })
    .state('eventmenu.notessub', {
      url: "/notessub",
      views: {
        'menuContent' :{
          templateUrl: "templates/notessub.html",
          controller: "curriculumctrl"
        }
      }
    })
     .state('eventmenu.notes', {
      url: "/notes",
      views: {
        'menuContent' :{
          templateUrl: "templates/notes.html",
          controller: "NotesController"
        }
      }
    })

    .state('eventmenu.progress', {
      url: "/Progress",
      views: {
        'menuContent' :{
          templateUrl: "templates/progress.html",
          controller: "curriculumctrl"
        }
      }
    })
      .state('eventmenu.progress_module', {
      url: "/module",
      views: {
        'menuContent' :{
          templateUrl: "templates/progress_module.html",
          controller: "moduleCtrl"
        }
      }
    })
   .state('eventmenu.report', {
      url: "/report",
      views: {
        'menuContent' :{
          templateUrl: "templates/report.html",
          controller: ""
        }
      }
    })
  
  /*
     .state('eventmenu.progress_lesson', {
      url: "/lesson/{lessonId:[0-9]{1,4}}",
      views: {
        'menuContent' :{
          templateUrl: "templates/progress_lesson.html",
          controller: "lessonCtrl"
        }
      }
    })
  .state('eventmenu.progress_LO', {
      url: "/lesson/LO/{LOId:[0-9]{1,4}}",
      views: {
        'menuContent' :{
          templateUrl: "sidemenu/progress_LO.html",
          controller: "LOCtrl"
        }
      }
    })
    .state('eventmenu.progress_skill', {
      url: "/lesson/LO/Skill/{skillId:[0-9]{1,4}}",
      views: {
        'menuContent' :{
          templateUrl: "sidemenu/progress_skill.html",
          controller: "skillCtrl"
        }
      }
    })
   
*/
 

  // Each tab has its own nav history stack:

  .state('eventmenu.home.physics', {
    url: '/physics',
    views: {
      'tab-physics': {
        templateUrl: 'templates/physics.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('eventmenu.home.chemistry', {
      url: '/chemistry',
      views: {
        'tab-chemistry': {
          templateUrl: 'templates/chemistry.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('eventmenu.home.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })
    

  .state('eventmenu.home.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })
  
 .state('eventmenu.home.laplayer', {
    
      url:"/laplayer",
      views:{
          LAplayer:{
               templateUrl:'templates/laplayer1.html',
               controller:'',
              
          }
      }
     
    
    
})



.state('eventmenu.home.goalsmenu.gaplayer', {
    
      url:"/gaplayer",
      views:{
          LAplayer:{
               templateUrl:'templates/gaplayer.html',
               controller:'',
              
          }
      }
     
    
    
})

.state ('eventmenu.goalsmenu.practice',{
        
        url:'/practice',
     
          views:{
              
              practice:{
                    templateUrl: 'templates/tab1.html',
                   
     
                  
              }
              
            
          }
      
         
        
        
        
        })  
  
   .state ('eventmenu.goalsmenu.reference',{
        
        url:'/reference',
     
          views:{
              
              reference:{
                    templateUrl: 'templates/tab2.html',
                   
     
                  
              }
              
            
          }
  })
  
  
  .state ('eventmenu.home.laplayer.tab2.ref',{
        
        url:'/ref',
     
          views:{
              
              reference:{
                    templateUrl: 'templates/laplayer.reference.html',
                   
     
                  
              }
              
            
          }
  })
  
  
  .state ('eventmenu.goalsmenu.practice.qn',{
        
        url:'/{qnid:[0-9]{1,4}}/{sqno:[0-9]{1,4}}',
     
          views:{
              
              question:{
                    templateUrl:'templates/laplayer.details.tab1.html',
                   controller:'laplayerdisplay',
     
                  
              }
              
            
          }
      
         
      
        
        }) 
        
        
  .state ('eventmenu.goalsmenu.practice.ga',{
        
        url:'/{qnid:[0-9]{1,4}}/{sqno:[0-9]{1,4}}',
     
          views:{
              
              question:{
                    templateUrl:'templates/gaplayer.html',
                   controller:'laplayerdisplay',
     
                  
              }
              
            
          }
      
         
      
        
        }) 
         
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
  
  
  
  ;


    
  
  $urlRouterProvider.otherwise("/event/home");
})







app.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.attendees = [
    { firstname: 'Nicolas', lastname: 'Cage' },
    { firstname: 'Jean-Claude', lastname: 'Van Damme' },
    { firstname: 'Keanu', lastname: 'Reeves' },
    { firstname: 'Steven', lastname: 'Seagal' }
  ];
  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
});




app.controller('CheckinCtrl', function($scope) {
  $scope.showForm = true;
  
  $scope.shirtSizes = [
    { text: 'Large', value: 'L' },
    { text: 'Medium', value: 'M' },
    { text: 'Small', value: 'S' }
  ];
  
  $scope.attendee = {};
  $scope.submit = function() {
    if(!$scope.attendee.firstname) {
      alert('Info required');
      return;
    }
    $scope.showForm = false;
    $scope.attendees.push($scope.attendee);
  };
  
});

app.controller('AttendeesCtrl', function($scope) {
  
  $scope.activity = [];
  $scope.arrivedChange = function(attendee) {
    var msg = attendee.firstname + ' ' + attendee.lastname;
    msg += (!attendee.arrived ? ' has arrived, ' : ' just left, '); 
    msg += new Date().getMilliseconds();
    $scope.activity.push(msg);
    if($scope.activity.length > 3) {
      $scope.activity.splice(0, 1);
    }
  };
  
});


app.controller('DashCtrl', function($scope) {});

app.controller('ChatsCtrl',  function($scope) {});

app.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
});

app.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});





app.service('ContactService', function () {
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
                                "id": "1",
                                "lo": "IIT MATH SYLLABUS",
                                "description": "Tips for IIT Preparation",
                                "content": "Content of IIT MATH SYLLABUS"
                            },
                            {   
                                "id": "2",
                                "lo": "The timeline for IIT",
                                "description": "The timlines for preparation of IIT",
                                "content": "the content of timelines for iit prep"
                            },
                            {   
                                "id": "3",
                                "lo": "Score Requirements",
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
                                "id": "1",
                                "lo": " Bayesian Analysis",
                                "description": "IIT Preparation for  Bayesian Analysis",
                                "content": "Content of  Bayesian Analysis"
                            },
                            {   
                                "id": "2",
                                "lo": " Birthday Problem",
                                "description": " Birthday Problem preparation of IIT",
                                "content": "the content of  Birthday Problem"
                            },
                            {   "id": "3",
                                "lo": "Chuck-a-Luck",
                                "description": "Chuck-a-Luck for IIT Preparation",
                                "content": "The content for Chuck-a-Luck"
                            }
                        ]
                    },

            {
                "id":"2",
             "title": "Permu & combi",
                        "LOS": [
                            {   
                                "id": "1",
                                "lo": "Factorial",
                                "description": "Factorialfor IIT Preparation",
                                "content": "Content of Factorial for IIT"
                            },
                            {
                                "id": "2",
                                "lo": "Generating Function",
                                "description": "Generating Function for preparation of IIT",
                                "content": "the content of Generating Function"
                            },
                            {   
                                "id": "3",
                                "lo": "Fibonacci Number",
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
                                "id": "1",
                                "lo": "Polynomial",
                                "description": "Polynomial for IIT Preparation",
                                "content": "Content of Polynomial IIT MATH"
                            },
                            {   
                                "id": "2",
                                "lo": "Quadratic Formula",
                                "description": "Quadratic Formula for preparation of IIT",
                                "content": "the content of Quadratic Formula for iit prep"
                            },
                            {   
                                "id": "3",
                                "lo": "Geometric Mean",
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
                                "id": "1",
                                "lo": "IIT MATH SYLLABUS",
                                "description": "Tips for IIT Preparation",
                                "content": "Content of IIT MATH SYLLABUS"
                            },
                            {
                                "id": "2",
                                "lo": "The timlines for preparation of IIT",
                                "description": "The timlines for preparation of IIT",
                                "content": "the content of timelines for iit prep"
                            },
                            {
                                "id": "3",
                                "lo": "Score Requirements",
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
                                "id": "1",
                                "lo": "Addition Theorm",
                                "description": "IIT Algebra Addition Theorm",
                                "content": "Content of IIT MATH SYLLABUS"
                            },
                            {
                                "id": "2",
                                "lo": "Multiplication Therom",
                                "description": "IIT Algebra Multiplication Therom",
                                "content": "the content of timelines for iit prep"
                            },
                            {
                                "id": "3",
                                "lo": "Bayes Theorm",
                                "description": "IIT Algebra Bayes Theorm",
                                "content": "The content of score requiremnt"
                            }
                        ]
                    }
                    
                      
        ];        

    //simply returns the contacts list
    this.list = function () {
        return contacts;
    }
});






/*
app.controller('AccordionDemoCtrl', function ($scope,$stateParams, ContactService, $ionicModal) {
  $scope.oneAtATime = true;
   
  $scope.modules = ContactService.list();
  
  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };








 // console.log('AccordionDemoCtrl');
  $ionicModal.fromTemplateUrl('templates/content.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
      //console.log(content.id);
    });
  $scope.openModal = function(content1){
    $scope.modal.show();
    $scope.content1=content1;
  }
  $scope.closeModal = function(){
    $scope.modal.hide();
  }
});
*/
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

 /*app.controller('MediaCtrl', function($scope, $ionicModal) {

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
});

*/



app.service('recordService', function () {
    //to create unique contact id
    var uid = 1;
    
    //contacts array to hold list of all contacts
    var records = 
 [
             {
                "id": "0",
                "title": "Probability",
                "proficiency": "minimal",
                "proficiencyval":"1",
                "status": "complete",
                "statusval":"100",
                "grit": "medium",
                "gritval":"2",
                "lesson": [
                    {
                        "id": "101",
                        "title": "Lesson-1",
                        "proficiency": "partial",
                        "proficiencyval":"2",
                        "status": "Half way",
                        "statusval":"50",
                        "grit": "High",
                        "gritval":"3",
                        "LO": [
                            {
                                "id": "1001",
                                "title": "LO-1",
                                "proficiency": "medium",
                                "proficiencyval":"3",
                                "status": "Start",
                                "statusval":"0",
                                "grit": "Low",
                                "gritval":"1",
                                "skill": [
                                    {
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "1002",
                                "title": "LO-2",
                                "proficiency": "minimal",
                                "proficiencyval":"1",
                                "status": "complete",
                                "statusval":"100",
                                "grit": "medium",
                                "gritval":"2",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "1003",
                                "title": "LO-3",
                                "proficiency": "partial",
                                "proficiencyval":"2",
                                "status": "Half way",
                                "statusval":"50",
                                "grit": "High",
                                "gritval":"3",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    }
                                ]
                            }
                    
                        ]
                    },
                    {
                        "id": "102",
                        "title": "Lesson-2",
                        "proficiency": "medium",
                        "proficiencyval":"3",
                        "status": "Start",
                        "statusval":"0",
                        "grit": "Low",
                        "gritval":"1",
                        "LO": [
                            {
                                "id": "1004",
                                "title": "LO-1",
                                "proficiency": "medium",
                                "proficiencyval":"3",
                                "status": "Start",
                                "statusval":"0",
                                "grit": "Low",
                                "gritval":"1",
                                "skill": [
                                    {
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "1005",
                                "title": "LO-2",
                                "proficiency": "minimal",
                                "proficiencyval":"1",
                                "status": "complete",
                                "statusval":"100",
                                "grit": "medium",
                                "gritval":"2",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "1006",
                                "title": "LO-3",
                                "proficiency": "partial",
                                "proficiencyval":"2",
                                "status": "Half way",
                                "statusval":"50",
                                "grit": "High",
                                "gritval":"3",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    }
                                ]
                            }
                    
                        ]
                    },
                    {
                        "id": "103",
                        "title": "Lesson-3",
                        "proficiency": "minimal",
                        "proficiencyval":"1",
                        "status": "complete",
                        "statusval":"100",
                        "grit": "medium",
                        "gritval":"2",
                        "LO": [
                            {
                                "id": "1007",
                                "title": "LO-1",
                                "proficiency": "medium",
                                "proficiencyval":"3",
                                "status": "Start",
                                "statusval":"0",
                                "grit": "Low",
                                "gritval":"1",
                                "skill": [
                                    {
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "1008",
                                "title": "LO-2",
                                "proficiency": "minimal",
                                "proficiencyval":"1",
                                "status": "complete",
                                "statusval":"100",
                                "grit": "medium",
                                "gritval":"2",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "1009",
                                "title": "LO-3",
                                "proficiency": "partial",
                                "proficiencyval":"2",
                                "status": "Half way",
                                "statusval":"50",
                                "grit": "High",
                                "gritval":"3",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    }
                                ]
                            }
                    
                        ]
                    }
                    
                ]
             }, 
             {
                "id": "1",
                "title": "Permu & combi",
                "proficiency": "minimal",
               
                "proficiencyval":"2",
                "status": "Half way",
                "statusval":"50",
                "grit": "High",
                "gritval":"3",
                "lesson": [
                    {
                        "id": "201",
                        "title": "Lesson-4",
                        "proficiency": "partial",
                        "proficiencyval":"2",
                        "status": "Half way",
                        "statusval":"50",
                        "grit": "High",
                        "gritval":"3",
                        "LO": [
                            {
                                "id": "2001",
                                "title": "LO-1",
                                "proficiency": "medium",
                                "proficiencyval":"3",
                                "status": "Start",
                                "statusval":"0",
                                "grit": "Low",
                                "gritval":"1",
                                "skill": [
                                    {
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "2002",
                                "title": "LO-2",
                                "proficiency": "minimal",
                                "proficiencyval":"1",
                                "status": "complete",
                                "statusval":"100",
                                "grit": "medium",
                                "gritval":"2",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "2003",
                                "title": "LO-3",
                                "proficiency": "partial",
                                "proficiencyval":"2",
                                "status": "Half way",
                                "statusval":"50",
                                "grit": "High",
                                "gritval":"3",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    }
                                ]
                            }
                    
                        ]
                    },
                    {
                        "id": "202",
                        "title": "Lesson-5",
                        "proficiency": "medium",
                        "proficiencyval":"3",
                        "status": "Start",
                        "statusval":"0",
                        "grit": "Low",
                        "gritval":"1",
                        "LO": [
                            {
                                "id": "2004",
                                "title": "LO-1",
                                "proficiency": "medium",
                                "proficiencyval":"3",
                                "status": "Start",
                                "statusval":"0",
                                "grit": "Low",
                                "gritval":"1",
                                "skill": [
                                    {
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "2005",
                                "title": "LO-2",
                                "proficiency": "minimal",
                                "proficiencyval":"1",
                                "status": "complete",
                                "statusval":"100",
                                "grit": "medium",
                                "gritval":"2",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "2006",
                                "title": "LO-3",
                                "proficiency": "partial",
                                "proficiencyval":"2",
                                "status": "Half way",
                                "statusval":"50",
                                "grit": "High",
                                "gritval":"3",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    }
                                ]
                            }
                    
                        ]
                    },
                    {
                        "id": "203",
                        "title": "Lesson-6",
                        "proficiency": "minimal",
                        "proficiencyval":"1",
                        "status": "complete",
                        "statusval":"100",
                        "grit": "medium",
                        "gritval":"2",
                        "LO": [
                            {
                                "id": "2007",
                                "title": "LO-1",
                                "proficiency": "medium",
                                "proficiencyval":"3",
                                "status": "Start",
                                "statusval":"0",
                                "grit": "Low",
                                "gritval":"1",
                                "skill": [
                                    {
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "2008",
                                "title": "LO-2",
                                "proficiency": "minimal",
                                "proficiencyval":"1",
                                "status": "complete",
                                "statusval":"100",
                                "grit": "medium",
                                "gritval":"2",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    }
                                ]
                            },
                            {
                                "id": "2009",
                                "title": "LO-3",
                                "proficiency": "partial",
                                "proficiencyval":"2",
                                "status": "Half way",
                                "statusval":"50",
                                "grit": "High",
                                "gritval":"3",
                                "skill": [
                                    {
                                
                                        "id": "0",
                                        "title":"Skill-1",
                                        "proficiency": "partial",
                                        "proficiencyval":"2",
                                        "status": "Half way",
                                        "statusval":"50",
                                        "grit": "High",
                                        "gritval":"3",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "1",
                                        "title":"Skill-2",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "2",
                                        "title":"Skill-3",
                                        "proficiency": "medium",
                                        "proficiencyval":"3",
                                        "status": "Start",
                                        "statusval":"0",
                                        "grit": "Low",
                                        "gritval":"1",
                                        "time": "1:30 min"
                                    },
                                    {
                                        "id": "3",
                                        "title":"Skill-4",
                                        "proficiency": "minimal",
                                        "proficiencyval":"1",
                                        "status": "complete",
                                        "statusval":"100",
                                        "grit": "medium",
                                        "gritval":"2",
                                        "time": "1:30 min"
                                    }
                                ]
                            }
                    
                        ]
                    }
                    
                ]
            }          

            
        ];
        

    //simply returns the contacts list
    this.list = function () {
        return records;
    }
  
  this.module= function (id) {
    
      
        return records[id].lesson;
      
    }
    this.los= function (lid) {
      
        var j;
        j= moduleidgen(lid);
        return records[j-1].lesson[j-1].LO;
    }

    this.LOO= function (sklid) {
        var j;
        j= moduleidgen(sklid);
        j=j*100;
        
        var k= logeneration(sklid);
        j=j+k;
        return records[k-1].lesson[k-1].LO[k-1].skill;
    }


});

var moduleidgen=function(lid)
{
    
    var j=parseInt(lid/100);
    return j;
    
};
    
var logeneration=function(sklid)
{
    
    var j=parseInt(sklid/1000);
    return j;
    
};
   

/*app.controller('moduleCtrl', ['$scope', '$http','recordService','$ionicModal','$timeout', function ($scope, $http, recordService, $ionicModal, $timeout ) {
$scope.record= recordService.list();
     
   $ionicModal.fromTemplateUrl('templates/module_record.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
  $scope.openModal = function(module, myChart){
    $scope.modal.show();
    $scope.lessons=module.lesson;
      $scope.doughnut = function(myChart) {
          document.getElementById('myCoolChart1').setAttribute('type', 'Doughnut');
       //$scope.myChart=myChart;

           $scope.generatePieData();
        };
    console.log(myChart);

  }
  $scope.closeModal = function(){
    $scope.modal.hide();
  } 

     $scope.generatePieData = function(){
          var data =  [
        {
          value: 300,
          color:"#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
        },
        {
          value: 50,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
        },
        {
          value: 100,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
        },
        {
          value: 40,
          color: "#949FB1",
          highlight: "#A8B3C5",
          label: "Grey"
        },
        {
          value: 120,
          color: "#4D5360",
          highlight: "#616774",
          label: "Dark Grey"
        }

      ]
          $scope.myChart = {"data": data, "options": {} };
         // return {"data": data, "options": {} };
        };  
    
         
        $scope.doughnut = function() {
          document.getElementById('myCoolChart').setAttribute('type', 'Doughnut');

           $scope.generatePieData();
        };
        
  }]);  


app.controller('lessonCtrl', ['$scope', '$http','$stateParams','recordService','$ionicModal', function ($scope, $http,$stateParams, recordService, $ionicModal ) {
    
$scope.lessonId=$stateParams.lessonId;
$scope.lessonrecord= recordService.module($scope.lessonId);
    
         $ionicModal.fromTemplateUrl('templates/lesson_record.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
  $scope.openModal = function(lo){
    $scope.modal.show();
    $scope.los=lo.LO;
  }
  $scope.closeModal = function(){
    $scope.modal.hide();
  }
    
  }]);  

app.controller('LOCtrl', ['$scope', '$http','$stateParams','recordService','$ionicModal', function ($scope, $http,$stateParams, recordService, $ionicModal ) {
    
$scope.lessonId=$stateParams.lessonId;
$scope.LOId=$stateParams.LOId;
    
$scope.LOrecord= recordService.los($scope.LOId);
    
     $ionicModal.fromTemplateUrl('templates/LO_record.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
  $scope.openModal = function(los){
    $scope.modal.show();
    $scope.skills=los.skill;
  }
  $scope.closeModal = function(){
    $scope.modal.hide();
  }
    
  }]);  
    
    
    
  


app.controller('skillCtrl', ['$scope', '$http','$stateParams','recordService', function ($scope, $http,$stateParams, recordService ) {
    
$scope.lessonId=$stateParams.lessonId;
$scope.LOId=$stateParams.LOId;
$scope.skillId=$stateParams.skillId;
    
$scope.skillrecord= recordService.LOO($scope.skillId);
     
  }]); 



   */
               
               
  
    
    
    
    
    
    
    
      
    
    
 
                  
                  

      