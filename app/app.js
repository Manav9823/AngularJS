let myapp = angular.module('myapp',[])


// Not working
// myapp.run(function($rootscope){
//   $rootscope.message='hello from root scope'
// })

// simple scope method
myapp.controller('myctrl',function($scope){
  $scope.message="hello from simple scope" 
  $scope.arr=['hello','hii','buy buy']
})

// filter method

myapp.controller('newctrl',function($scope){
  
  // remove function on click
  $scope.remove = function(ninja){
    console.log(ninja)
    let ninjaidx = $scope.obj.indexOf(ninja)
    console.log(ninjaidx)
    $scope.obj.splice(ninjaidx,1)
  }
  
  $scope.obj=[
    {
      name:'Manav',
      belt:'red',
      rate:4,
      avaliable:true
    },
    {
      name:'New',
      belt:'blue',
      rate:3,
      avaliable:true
    },
    {
      name:'Old',
      belt:'yellow',
      rate:6,
      avaliable:true
    }
  ]
})

