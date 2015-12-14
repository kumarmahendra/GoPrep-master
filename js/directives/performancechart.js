'use strict';
angular.module('ionicApp')

.directive('drawchart',[function(){
     
    
    return{
   restrict: 'E',  
   scope: { title:'=expanderTitle' }, 
template: '<div class="container"><ul class="week"></ul><div class="date"></div></div>',  
         replace: true,
         link: function(scope, element, attrs)
        {        scope.showMe = false;
         
         
        
        },
        controller: function()
        {
             var data = [
         {day: 'M'},
       
  ];
  var dateFormatter = d3.time.format("%A, %B %d, %Y");
  var mainChart = new RadialProgressChart('.container', {
        diameter: 10,
         stroke: {
            width: 30,
            gap: 12
          },
        series: [
          {labelStart: '\uF106', value: 5},
          {labelStart: '\uF101', value: 5},
          {labelStart: '\uF105', value: 5}
        ]}
  );

  d3.select('.week').selectAll('li')
      .data(data).enter()
      .append('li').on('click', function (d) {
        // Update active class, date and main chart
        d3.selectAll('.circle').classed('active', false);
        d3.select(this).select('.circle').classed('active', true);
        d3.select('.date').text(d.date);
        mainChart.update(d.series);
      })
      .append('div').attr('class', 'circle').text(function (d) {
        return d.day;
      })
      .each(function (d, i) {
        d.date = dateFormatter(getDate(i));
        d.series = [getRandom(), getRandom(), getRandom()];
        new RadialProgressChart(this.parentNode, {
          diameter: 5,
          stroke: {
            width: 3,
            gap: 12
          },
          series: d.series
        });
      });

  // Return some chronological dates
  function getDate(i) {
    var date = new Date('2015-06-16');
    date.setDate(date.getDate() + i);
    return date;
  }

  // Random int between 20-80
  function getRandom() {
    return Math.round(Math.random() * 60) + 20;
  }

  // Select monday by default
  document.querySelector('li').click();

        
        
}
                           
} }  ]) 
    
    
    
  
.directive('drawchart1',[function(){
     
    
    return{
   restrict: 'E',  
   scope: { title:'=expanderTitle' }, 
template: '<div class="container1"></div></div>',  
         replace: true,
         link: function(scope, element, attrs)
        {        scope.showMe = false;
         
         
        
        },
        controller: function()
        {
             var data = [
         {day: 'M'},
        {day: 'T'},
    {day: 'W'},
    {day: 'T'},
    {day: 'F'},
    {day: 'S'},
    {day: 'S'}
  ];
  var dateFormatter = d3.time.format("%A, %B %d, %Y");
  var mainChart = new RadialProgressChart('.container1', {
        diameter: 150,
        stroke: {
            width: 40,
            gap: 12
          },
        series: [
          {labelStart: '\uF106', value: 5},
         
        ]}
  );
  
  

  

  d3.select('.week1').selectAll('li')
      .data(data).enter()
      .append('li').on('click', function (d) {
        // Update active class, date and main chart
        d3.selectAll('.circle').classed('active', false);
        d3.select(this).select('.circle').classed('active', true);
        d3.select('.date').text(d.date);
        mainChart.update(d.series);
      })
      .append('div').attr('class', 'circle').text(function (d) {
        return d.day;
      })
      .each(function (d, i) {
        d.date = dateFormatter(getDate(i));
        d.series = [getRandom(), getRandom(), getRandom()];
        new RadialProgressChart(this.parentNode, {
          diameter: 5,
          stroke: {
            width: 6,
            gap: 12
          },
          series: d.series
        });
      });

  // Return some chronological dates
  function getDate(i) {
    var date = new Date('2015-06-16');
    date.setDate(date.getDate() + i);
    return date;
  }

  // Random int between 20-80
  function getRandom() {
    return Math.round(Math.random() * 60) + 20;
  }

  // Select monday by default
  document.querySelector('li').click();

        
        
}
                           
} }  ])
      
  
  
  
  
  //directive 3
  
.directive('drawchart2',[function(){
     
    
    return{
   restrict: 'E',  
   scope: { title:'=expanderTitle' }, 
template: '<div class="container2"></div></div>',  
         replace: true,
         link: function(scope, element, attrs)
        {        scope.showMe = false;
         
         
        
        },
        controller: function()
        {
             var data = [
         {day: 'M'},
        {day: 'T'},
    {day: 'W'},
    {day: 'T'},
    {day: 'F'},
    {day: 'S'},
    {day: 'S'}
  ];
  var dateFormatter = d3.time.format("%A, %B %d, %Y");
  var mainChart = new RadialProgressChart('.container2', {
        diameter: 150,
        stroke: {
            width: 40,
            gap: 12
          },
        series: [
          {labelStart: '\uF106', value: 50},
         
        ]}
  );
  
  

  

  d3.select('.week1').selectAll('li')
      .data(data).enter()
      .append('li').on('click', function (d) {
        // Update active class, date and main chart
        d3.selectAll('.circle').classed('active', false);
        d3.select(this).select('.circle').classed('active', true);
        d3.select('.date').text(d.date);
        mainChart.update(d.series);
      })
      .append('div').attr('class', 'circle').text(function (d) {
        return d.day;
      })
      .each(function (d, i) {
        d.date = dateFormatter(getDate(i));
        d.series = [getRandom(), getRandom(), getRandom()];
        new RadialProgressChart(this.parentNode, {
          diameter: 5,
          stroke: {
            width: 6,
            gap: 12
          },
          series: d.series
        });
      });

  // Return some chronological dates
  function getDate(i) {
    var date = new Date('2015-06-16');
    date.setDate(date.getDate() + i);
    return date;
  }

  // Random int between 20-80
  function getRandom() {
    return Math.round(Math.random() * 60) + 20;
  }

  // Select monday by default
  document.querySelector('li').click();

        
        
}
                           
} }  ]) 
      
  

  
  
  //directive4
  
  
  
.directive('drawchart4',[function(){
     
    
    return{
   restrict: 'E',  
   scope: { title:'=expanderTitle' }, 
template: '<div class="container4"></div></div>',  
         replace: true,
         link: function(scope, element, attrs)
        {        scope.showMe = false;
         
         
        
        },
        controller: function()
        {
             var data = [
         {day: 'M'},
        {day: 'T'},
    {day: 'W'},
    {day: 'T'},
    {day: 'F'},
    {day: 'S'},
    {day: 'S'}
  ];
  var dateFormatter = d3.time.format("%A, %B %d, %Y");
  var mainChart = new RadialProgressChart('.container4', {
        diameter: 150,
        stroke: {
            width: 40,
            gap: 12
          },
        series: [
          {labelStart: '\uF106', value: 70},
         
        ]}
  );
  
  

  

  d3.select('.week1').selectAll('li')
      .data(data).enter()
      .append('li').on('click', function (d) {
        // Update active class, date and main chart
        d3.selectAll('.circle').classed('active', false);
        d3.select(this).select('.circle').classed('active', true);
        d3.select('.date').text(d.date);
        mainChart.update(d.series);
      })
      .append('div').attr('class', 'circle').text(function (d) {
        return d.day;
      })
      .each(function (d, i) {
        d.date = dateFormatter(getDate(i));
        d.series = [getRandom(), getRandom(), getRandom()];
        new RadialProgressChart(this.parentNode, {
          diameter: 5,
          stroke: {
            width: 6,
            gap: 12
          },
          series: d.series
        });
      });

  // Return some chronological dates
  function getDate(i) {
    var date = new Date('2015-06-16');
    date.setDate(date.getDate() + i);
    return date;
  }

  // Random int between 20-80
  function getRandom() {
    return Math.round(Math.random() * 60) + 20;
  }

  // Select monday by default
  document.querySelector('li').click();

        
        
}
                           
} }  ])



//directive5
      
  
.directive('drawchart5',[function(){
     
    
    return{
   restrict: 'E',  
   scope: { title:'=expanderTitle' }, 
template: '<div class="container5"></div></div>',  
         replace: true,
         link: function(scope, element, attrs)
        {        scope.showMe = false;
         
         
        
        },
        controller: function()
        {
             var data = [
         {day: 'M'},
        {day: 'T'},
    {day: 'W'},
    {day: 'T'},
    {day: 'F'},
    {day: 'S'},
    {day: 'S'}
  ];
  var dateFormatter = d3.time.format("%A, %B %d, %Y");
  var mainChart = new RadialProgressChart('.container5', {
        diameter: 150,
        stroke: {
            width: 40,
            gap: 12
          },
        series: [
          {labelStart: '\uF106', value: 70},
         
        ]}
  );
  
  

  

  d3.select('.week1').selectAll('li')
      .data(data).enter()
      .append('li').on('click', function (d) {
        // Update active class, date and main chart
        d3.selectAll('.circle').classed('active', false);
        d3.select(this).select('.circle').classed('active', true);
        d3.select('.date').text(d.date);
        mainChart.update(d.series);
      })
      .append('div').attr('class', 'circle').text(function (d) {
        return d.day;
      })
      .each(function (d, i) {
        d.date = dateFormatter(getDate(i));
        d.series = [getRandom(), getRandom(), getRandom()];
        new RadialProgressChart(this.parentNode, {
          diameter: 5,
          stroke: {
            width: 6,
            gap: 12
          },
          series: d.series
        });
      });

  // Return some chronological dates
  function getDate(i) {
    var date = new Date('2015-06-16');
    date.setDate(date.getDate() + i);
    return date;
  }

  // Random int between 20-80
  function getRandom() {
    return Math.round(Math.random() * 60) + 20;
  }

  // Select monday by default
  document.querySelector('li').click();

        
        
}
                           
} }  ])
      
      
      
      
      
      
      
.directive('drawchart6',[function(){
     
    
    return{
   restrict: 'E',  
   scope: { title:'=expanderTitle' }, 
template: '<div class="container6"></div></div>',  
         replace: true,
         link: function(scope, element, attrs)
        {        scope.showMe = false;
         
         
        
        },
        controller: function()
        {
             var data = [
         {day: 'M'},
        {day: 'T'},
    {day: 'W'},
    {day: 'T'},
    {day: 'F'},
    {day: 'S'},
    {day: 'S'}
  ];
  var dateFormatter = d3.time.format("%A, %B %d, %Y");
  var mainChart = new RadialProgressChart('.container6', {
        diameter: 150,
        stroke: {
            width: 40,
            gap: 12
          },
        series: [
          {labelStart: '\uF106', value: 70},
         
        ]}
  );
  
  

  

  d3.select('.week1').selectAll('li')
      .data(data).enter()
      .append('li').on('click', function (d) {
        // Update active class, date and main chart
        d3.selectAll('.circle').classed('active', false);
        d3.select(this).select('.circle').classed('active', true);
        d3.select('.date').text(d.date);
        mainChart.update(d.series);
      })
      .append('div').attr('class', 'circle').text(function (d) {
        return d.day;
      })
      .each(function (d, i) {
        d.date = dateFormatter(getDate(i));
        d.series = [getRandom(), getRandom(), getRandom()];
        new RadialProgressChart(this.parentNode, {
          diameter: 5,
          stroke: {
            width: 6,
            gap: 12
          },
          series: d.series
        });
      });

  // Return some chronological dates
  function getDate(i) {
    var date = new Date('2015-06-16');
    date.setDate(date.getDate() + i);
    return date;
  }

  // Random int between 20-80
  function getRandom() {
    return Math.round(Math.random() * 60) + 20;
  }

  // Select monday by default
  document.querySelector('li').click();

        
        
}
                           
} }  ])