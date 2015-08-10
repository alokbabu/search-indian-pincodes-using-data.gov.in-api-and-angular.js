var app = angular.module('pincodeModule', ['angularSpinner']);

app.controller('pincodeController', ['$scope', '$http', 'usSpinnerService', function($scope, $http, usSpinnerService){
	$scope.show = false;

	$scope.startSpin = function(){
		usSpinnerService.spin('fetch-spinner');
	}

	$scope.stopSpin = function(){
		usSpinnerService.stop('fetch-spinner');
	}	

	$scope.fetch = function(pincode){
		if(pincode.length > 5)
		{
			$scope.startSpin();
			var api = "https://data.gov.in/api/datastore/resource.json?"
						+"resource_id=0a076478-3fd3-4e2c-b2d2-581876f56d77"
						+"&api-key=[YOUR-API_KEY]]"
						+"&limit=100"
						+"&filters[pincode]="+pincode
						//+"&filters[officename]="+$scope.pincode
				$http.get(api).success(function(response){				
				$scope.pincodes = response.records;
				$scope.stopSpin();
				});
			$scope.show = true;
		}
		else
		{
			$scope.pincodes = "";
			$scope.show = false;
		}
	}

}]);;
