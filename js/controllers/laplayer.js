'use strict';
angular.module('ionicApp')

.controller('laplayerdisplay',function($rootScope,$scope,$state,$stateParams,$log,$location,$http,$document,$window,$q,$timeout)
               
              
           
           {
    
    

      var data= [
    {
        "skillid": null,
        "qtype": 1,
        "questions": [
            {
                "qtype": 1,
                "question": "Question number 1",
                "passage": null,
                "answer": "Delhi",
                "solution": null,
                "option1": "Delhi",
                "option2": "Mumbai",
                "option3": "Kolkata",
                "option4": "Chennai",
                "option5": null,
                "option6": null,
                "matcha": null,
                "matchb": null,
                "matchc": null,
                "matchd": null,
                "matche": null,
                "matchf": null,
                "hint1": null,
                "hint2": null,
                "hint3": null,
                "grit": null,
                "level": null
            },
            {
                "qtype": 2,
                "question": "Question number 2",
                "passage": "ria and Mongolia.They also lived in Beringian North America during the Pleistocene. Today, the dominant  and occasionally Tura vast area of the Eurasian steppe zone from the f",
                "answer": "Delhi",
                "solution": null,
                "option1": "Delhi",
                "option2": "Mumbai",
                "option3": "Kolkata",
                "option4": "Chennai",
                "option5": null,
                "option6": null,
                "matcha": null,
                "matchb": null,
                "matchc": null,
                "matchd": null,
                "matche": null,
                "matchf": null,
                "hint1": null,
                "hint2": null,
                "hint3": null,
                "grit": null,
                "level": null
            },
            {
                "qtype": 3,
                "question": "Capital of India3",
                "passage": "ria and Mongolia.They also lived in Beringian North America during the Pleistocene. Today, the dominant  and occasionally Tura vast area of the Eurasian steppe zone from the f",
                "answer": "Delhi",
                "solution": null,
                "option1": "Delhi",
                "option2": "Mumbai",
                "option3": "Kolkata",
                "option4": "Chennai",
                "option5": null,
                "option6": null,
                "matcha": null,
                "matchb": null,
                "matchc": null,
                "matchd": null,
                "matche": null,
                "matchf": null,
                "hint1": null,
                "hint2": null,
                "hint3": null,
                "grit": null,
                "level": null
            }
        ]
    },
    {
        "skillid": null,
        "qtype": 0,
        "questions": [
            {
                "qtype": 4,
                "question": "Capital of India4",
                "passage": "ria and Mongolia.They also lived in Beringian North America during the Pleistocene. Today, the dominant  and occasionally Tura vast area of the Eurasian steppe zone from the f",
                "answer": "Delhi",
                "solution": null,
                "option1": "Delhi",
                "option2": "Mumbai",
                "option3": "Kolkata",
                "option4": "Chennai",
                "option5": null,
                "option6": null,
                "matcha": null,
                "matchb": null,
                "matchc": null,
                "matchd": null,
                "matche": null,
                "matchf": null,
                "hint1": null,
                "hint2": null,
                "hint3": null,
                "grit": null,
                "level": null
            },
            {
                "qtype": 5,
                "question": "Capital of India5",
                "passage": "ria and Mongolia.They also lived in Beringian North America during the Pleistocene. Today, the dominant  and occasionally Tura vast area of the Eurasian steppe zone from the f",
                "answer": "Delhi",
                "solution": null,
                "option1": "Delhi",
                "option2": "Mumbai",
                "option3": "Kolkata",
                "option4": "Chennai",
                "option5": null,
                "option6": null,
                "matcha": null,
                "matchb": null,
                "matchc": null,
                "matchd": null,
                "matche": null,
                "matchf": null,
                "hint1": null,
                "hint2": null,
                "hint3": null,
                "grit": null,
                "level": null
            }
           
        ]
    },
    {
        "skillid": null,
        "qtype": 1,
        "questions": [
            {
                "qtype": 6,
                "question": "Capital of India6",
                "passage": "ria and Mongolia.They also lived in Beringian North America during the Pleistocene. Today, the dominant  and occasionally Tura vast area of the Eurasian steppe zone from the f",
                "answer": "Delhi",
                "solution": null,
                "option1": "Delhi",
                "option2": "Mumbai",
                "option3": "Kolkata",
                "option4": "Chennai",
                "option5": null,
                "option6": null,
                "matcha": null,
                "matchb": null,
                "matchc": null,
                "matchd": null,
                "matche": null,
                "matchf": null,
                "hint1": null,
                "hint2": null,
                "hint3": null,
                "grit": null,
                "level": null
            },
            {
                "qtype": 7,
                "question": "Capital of India7",
                "passage": "ria and Mongolia.They also lived in Beringian North America during the Pleistocene. Today, the dominant  and occasionally Tura vast area of the Eurasian steppe zone from the f",
                "answer": "Delhi",
                "solution": null,
                "option1": "Delhi",
                "option2": "Mumbai",
                "option3": "Kolkata",
                "option4": "Chennai",
                "option5": null,
                "option6": null,
                "matcha": null,
                "matchb": null,
                "matchc": null,
                "matchd": null,
                "matche": null,
                "matchf": null,
                "hint1": null,
                "hint2": null,
                "hint3": null,
                "grit": null,
                "level": null
            },
            {
                "qtype": 3,
                "question": "Capital of India",
                "passage": "ria and Mongolia.They also lived in Beringian North America during the Pleistocene. Today, the dominant  and occasionally Tura vast area of the Eurasian steppe zone from the f",
                "answer": "Delhi",
                "solution": null,
                "option1": "Delhi",
                "option2": "Mumbai",
                "option3": "Kolkata",
                "option4": "Chennai",
                "option5": null,
                "option6": null,
                "matcha": null,
                "matchb": null,
                "matchc": null,
                "matchd": null,
                "matche": null,
                "matchf": null,
                "hint1": null,
                "hint2": null,
                "hint3": null,
                "grit": null,
                "level": null
            }
        ]
    },
   
    {
        "skillid": null,
        "qtype": 0,
        "questions": [
            {
                "qtype": 1,
                "question": "Capital of India",
                "passage": "ria and Mongolia.They also lived in Beringian North America during the Pleistocene. Today, the dominant  and occasionally Tura vast area of the Eurasian steppe zone from the f",
                "answer": "Delhi",
                "solution": null,
                "option1": "Delhi",
                "option2": "Mumbai",
                "option3": "Kolkata",
                "option4": "Chennai",
                "option5": null,
                "option6": null,
                "matcha": null,
                "matchb": null,
                "matchc": null,
                "matchd": null,
                "matche": null,
                "matchf": null,
                "hint1": null,
                "hint2": null,
                "hint3": null,
                "grit": null,
                "level": null
            }
            
          
        ]
    },
    {
        "skillid": null,
        "qtype": 1,
        "questions": [
            {
                "qtype": 1,
                "question": "Capital of India",
                "passage": "ria and Mongolia.They also lived in Beringian North America during the Pleistocene. Today, the dominant  and occasionally Tura vast area of the Eurasian steppe zone from the f",
                "answer": "Delhi",
                "solution": null,
                "option1": "Delhi",
                "option2": "Mumbai",
                "option3": "Kolkata",
                "option4": "Chennai",
                "option5": null,
                "option6": null,
                "matcha": null,
                "matchb": null,
                "matchc": null,
                "matchd": null,
                "matche": null,
                "matchf": null,
                "hint1": null,
                "hint2": null,
                "hint3": null,
                "grit": null,
                "level": null
            }
        ]
    },
    {
        "skillid": null,
        "qtype": 1,
        "questions": [
            {
                "qtype": 1,
                "question": "Capital of India",
                "passage": "ria and Mongolia.They also lived in Beringian North America during the Pleistocene. Today, the dominant  and occasionally Tura vast area of the Eurasian steppe zone from the f",
                "answer": "Delhi",
                "solution": null,
                "option1": "Delhi",
                "option2": "Mumbai",
                "option3": "Kolkata",
                "option4": "Chennai",
                "option5": null,
                "option6": null,
                "matcha": null,
                "matchb": null,
                "matchc": null,
                "matchd": null,
                "matche": null,
                "matchf": null,
                "hint1": null,
                "hint2": null,
                "hint3": null,
                "grit": null,
                "level": null
            }
        ]
    }
];


    
     $scope.questno=$stateParams.qnid;
    console.log($stateParams.qnid);
      $scope.subqcheck=$stateParams.sqno;
    
     $scope.subvar=$scope.questno;
     $scope.subqcheck= parseInt($scope.subqcheck)+parseInt(1);
    
    
     
    if(data[$scope.questno-1].questions.length>$scope.subqcheck)
    {
       // $scope.subqnumber=data[$scope.questno-1].questions.length;
       
        
      //  for(var i=0;i<data[1].questions.length;i++)
       // 
            
         $scope.subqcheck= parseInt($scope.subqcheck)-parseInt(1);
        
        $scope.item= data[$scope.questno-1].questions[$scope.subqcheck];
        $scope.itemtype=data[$scope.questno-1].questions[$scope.subqcheck].qtype;
        $scope.subqcheck++;
         $scope.route1= $scope.questno;
        $scope.subvar=$scope.route1;
        
        
    
    
        $scope.url1="#laplayer/";
        $scope.url2="#laplayer/";
        
        
    }
    
      else if($scope.subqcheck==data[$scope.questno-1].questions.length)
        
        
        {
             $scope.subqcheck= parseInt($scope.subqcheck)-parseInt(1);
            
             $scope.item= data[$scope.questno-1].questions[$scope.subqcheck];
        $scope.itemtype=data[$scope.questno-1].questions[$scope.subqcheck].qtype;
            
            $scope.route1= parseInt($scope.questno)+parseInt(1);
            $scope.subqcheck=0;
           
            $scope.subvar=$scope.route1;
            
            
     
        
        
    } 
        
        else{
        
        
        
        $scope.item= data[$scope.questno-1].questions[$scope.subqcheck];
        $scope.itemtype=data[$scope.questno-1].questions[$scope.subqcheck].qtype;
        $scope.subqcheck++;
         $scope.route1= parseInt($scope.questno)+parseInt(0);   
        $scope.subvar=$scope.route1;
        
        
    
    
        $scope.url1="#laplayer/";
        $scope.url2="#laplayer/";
        
    
    
        }
    
    
    
    
    $scope.nextquestionla=function()
{
    
     location.href="#/event/goalsmenu/practice/"+ $scope.subvar+"/"+ $scope.subqcheck+"";
    
}
  
    $scope.remember=function()
    
    {
        
         location.href="#/laplayer/tab1/"+ $scope.subvar+"/"+ $scope.subqcheck+"";
        
    }
  
   
    
    //text selection
    
   
	 $scope.showSelectedText = function() {
        $scope.selectedText =  $scope.getSelectionText();
    };
    
    $scope.getSelectionText = function() {
      var text = "";
      if (window.getSelection) {
          text = window.getSelection().toString();
      } else if (document.selection && document.selection.type != "Control") {
          text = document.selection.createRange().text;
      }
      return text;
    };
	
	
	
	//sorting
    
    
      $scope.contacts = [
        { name: 'Frank', img: 'frank.jpg', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
        { name: 'Susan', img: 'susan.jpg', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
        { name: 'Emma', img: 'emma.jpg', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
        { name: 'Scott', img: 'scott.jpg', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
        { name: 'Bob', img: 'bob.jpg', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
        { name: 'Olivia', img: 'olivia.jpg', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' },
        { name: 'Anne', img: 'anne.jpg', phone: '0101 123456', mobile: '0770 123456', email: 'frank@emailionicsorter.com' }
    ];

    $scope.onReorder = function (fromIndex, toIndex) {
        var moved = $scope.contacts.splice(fromIndex, 1);
        $scope.contacts.splice(toIndex, 0, moved[0]);
    };
    
    
    
    
    

	//numeric entry



	 $scope.numericentry = {
        value: null
      };


	//    
    
    
    
 
 
        	
    
    

    
    
   
    
    
});
               
  