angular.module('app6')
  .controller('detailsCtrl', function($scope, petsService, $stateParams){
    $scope.details = 'DETAILS! GET EM!';

    petsService.getOnePet($stateParams.id)
      .then(function(response){
        $scope.pet = response.data;
      })
    

  })
