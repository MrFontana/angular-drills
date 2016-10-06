angular.module('myApp').controller('mainController', function($scope){
  $scope.name = "Kevin";

  $scope.changeName = function(name) {
    $scope.name = name;
    $scope.newName = '';
  }
})
