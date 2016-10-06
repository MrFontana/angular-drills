angular.module('app6')
  .controller('homeCtrl', function($scope, petsService){
    $scope.home = 'HOME! GET IT!';

    petsService.getPets().then(function(response){
      $scope.pets = response.data;

    //when using promises you have to get data through ".then". it happens asyncronously
    })
  })
