angular.module('app6')
  .service('petsService', function($http){
    var baseUrl = 'http://practiceapi.devmountain.com'
      //make a function
      //get all pets from api
      //return them to controller

      this.getPets = function() {
        return $http({
          method: 'GET',
          url: baseUrl + '/pets'
        })
      }

      this.getOnePet = function(id) {
        //do http request
        //get one pet by id
        //return iot to the controller

        return $http({
          method: 'GET',
          url: baseUrl + '/pets/' + id
        })
      }
  })
