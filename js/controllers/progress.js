'use strict';
angular.module('ionicApp')



.controller('popoverlistCtrl', ['$scope', '$http','recordService','$ionicModal','$timeout','$ionicPopover', function ($scope, $http, recordService, $ionicModal, $timeout, $ionicPopover ) {
 $scope.record= recordService.list();   
  
    
}])




.controller('popoverCtrl', ['$scope','$ionicPopover', function ($scope, $ionicPopover ) {
    
   $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
}])
.service('recordService', function () {
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
                "proficiency": "partial",
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
})

.controller('moduleCtrl', ['$scope', '$http','$ionicModal','$timeout','$ionicPopover', function ($scope, $http, $ionicModal, $timeout, $ionicPopover ) {

   $ionicModal.fromTemplateUrl('templates/lo_chart.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
     
   $ionicPopover.fromTemplateUrl('templates/popover.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover;
  });
       
    
            'use strict';

     $timeout(function(){
         $scope.lo = [
    {
        "lo_id": "0",
        "lo_title": "LO-1",
        "start_date": "01-01-15",
        "due_date": "05-01-15",
        "Time_spent":"5 hr",
        "status": "complete",
        "proficiency": "Basic",
        "grit": "medium",
        "Subject": "Math",
        "Module": "Probability",
        "Lesson": "Lesson-1"
    },
    {
        "lo_id": "1",
        "lo_title": "LO-2",
        "start_date": "01-01-15",
        "due_date": "05-01-15",
        "Time_spent": "5 hr",
        "status": "Half-way",
        "proficiency": "Intermidiate",
        "grit": "medium",
        "Subject": "Math",
        "Module": "Probability",
        "Lesson": "Lesson-1"
    },
    {
        "lo_id": "2",
        "lo_title": "LO-3",
        "start_date": "01-01-15",
        "due_date": "05-01-15",
        "Time_spent": "5 hr",
        "status": "Started",
        "proficiency": "moderat",
        "grit": "medium",
        "Subject": "Math",
        "Module": "Probability",
        "Lesson": "Lesson-2"
    },
    {
        "lo_id": "3",
        "lo_title": "LO-4",
        "start_date": "01-01-15",
        "due_date": "05-01-15",
        "Time_spent": "4 hr",
        "status": "Not-Started",
        "proficiency": "Proficent",
        "grit": "medium",
        "Subject": "Math",
        "Module": "Probability",
        "Lesson": "Lesson-2"
    },
    {
        "lo_id": "4",
        "lo_title": "LO-5",
        "start_date": "01-01-15",
        "due_date": "05-01-15",
        "Time_spent": "5 hr",
        "status": "Review",
        "proficiency": "Basic",
        "grit": "medium",
        "Subject": "Math",
        "Module": "Permu & combi",
        "Lesson": "Lesson-3"
    },
    {
        "lo_id": "5",
        "lo_title": "LO-6",
        "start_date": "01-01-15",
        "due_date": "05-01-15",
        "Time_spent": "5 hr",
        "status": "Review",
        "proficiency": "Intermidiate",
        "grit": "medium",
        "Subject": "Math",
        "Module": "Permu & combi",
        "Lesson": "Lesson-3"
    },
    {
        "lo_id": "6",
        "lo_title": "LO-7",
        "start_date": "01-01-15",
        "due_date": "05-01-15",
        "Time_spent": "5 hr",
        "status": "Completed",
        "proficiency": "moderat",
        "grit": "medium",
        "Subject": "Math",
        "Module": "Permu & combi",
        "Lesson": "Lesson-4"
    },
    {
        "lo_id": "7",
        "lo_title": "LO-8",
        "start_date": "01-01-15",
        "due_date": "05-01-15",
        "Time_spent": "5 hr",
        "status": "Half-way",
        "proficiency": "Proficent",
        "grit": "medium",
        "Subject": "Math",
        "Module": "Permu & combi",
        "Lesson": "Lesson-4"
    }
   ];
    
     },100);
    
    
       $scope.FROMdatepickerObject = {
            titleLabel: 'Title',    //Optional
            todayLabel: 'Today',    //Optional
            closeLabel: 'Close',    //Optional
            setButtonType : 'button-assertive',  //Optional
            todayButtonType : 'button-assertive',  //Optional
            closeButtonType : 'button-assertive',  //Optional
            inputDate: new Date(),
            mondayFirst: true,    //Optional
            weekDaysList: weekDaysList,    //Optional
            monthList: monthList,    //Optional
            templateType: 'popup', //Optional
            modalHeaderColor: 'bar-positive', //Optional
            modalFooterColor: 'bar-positive', //Optional
            from: new Date(),
            callback: function(val) {
            this.inputDate = val;
            $scope.TOdatepickerObject.inputDate = val; // Change the To Input Date
            $scope.TOdatepickerObject.from = val; //Change the From of the Input Date
            }
        };
          $scope.TOdatepickerObject = {
            titleLabel: 'Title',    //Optional
            todayLabel: 'Today',    //Optional
            closeLabel: 'Close',    //Optional
            setButtonType : 'button-assertive',  //Optional
            todayButtonType : 'button-assertive',  //Optional
            closeButtonType : 'button-assertive',  //Optional
            inputDate: new Date(),
            mondayFirst: true,    //Optional
            weekDaysList: weekDaysList,    //Optional
            monthList: monthList,    //Optional
            templateType: 'popup', //Optional
            modalHeaderColor: 'bar-positive', //Optional
            modalFooterColor: 'bar-positive', //Optional
            from: new Date(),
            callback: function(val) {
              this.inputDate = val;
            }
          };
    
    
    
    

    
    
   
    var weekDaysList = ["Sun", "Mon", "Tue", "Wed", "thu", "Fri", "Sat"];
    
     var monthList = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    
    var datePickerCallback = function (val) {
  if (typeof(val) === 'undefined') {
    console.log('No date selected');
  } else {
    console.log('Selected date is : ', val)
  }
};
    
    
    
  }]);
