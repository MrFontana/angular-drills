angular.module('apiApp')
.controller('smurfController', function($scope, smurfice){
  $scope.smurfs = smurfice.getSmurfs().then(function(smurfData){
    $scope.smurfs = smurfData;
  })
})
