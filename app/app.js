let myapp = angular.module('myapp',['ngRoute','ngAnimate'])
.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);



myapp.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when('/directory',{
    templateUrl:'views/directory.html',
    controller:'newctrl'
  }).when('/contact',{
    templateUrl:'views/contact.html'
  }).when('/home',{
    templateUrl:'views/home.html'
  }).otherwise({
    redirectTo:'/home'
  })
}])


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

myapp.controller('newctrl',[ '$scope','$http',function($scope,$http){
  
  // remove function on click
  $scope.remove = function(ninja){
    console.log(ninja)
    let ninjaidx = $scope.obj.indexOf(ninja)
    console.log(ninjaidx)
    $scope.obj.splice(ninjaidx,1)
  }

  $scope.add = function(){
    $scope.obj.push({
      name:$scope.newninja.name,
      belt:$scope.newninja.belt,
      rate:$scope.newninja.rate,
      avaliable:true
    })

    $scope.newninja.name=''
    $scope.newninja.rate=''
    $scope.newninja.belt=''
  }
  
  $http.get('data/ninja.json').then(function(data){
    $scope.obj=data.data
  })

}])

