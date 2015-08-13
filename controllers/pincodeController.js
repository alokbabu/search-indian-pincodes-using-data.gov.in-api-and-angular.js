app.controller('pincodeController', ['$scope', '$http', 'usSpinnerService', 'dataService', function($scope, $http, usSpinnerService, dataService){
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
			getPincodesByPincode(pincode);
			$scope.stopSpin();
			
			function getPincodesByPincode(pincode)
			{
				dataService.fetchPincode(pincode).success(function (response)
				{
					$scope.pincodes = response.records;					
				});
			}					
			$scope.show = true;
		}
		else
		{
			$scope.pincodes = "";
			$scope.show = false;
		}
	}

}]);;
