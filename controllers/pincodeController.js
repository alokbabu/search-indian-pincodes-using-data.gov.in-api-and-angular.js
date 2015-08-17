app.controller('pincodeController', ['$scope', '$http', 'usSpinnerService', 'dataService', function($scope, $http, usSpinnerService, dataService){
	
	//$scope.show = true;

	$scope.startSpin = function(){
		usSpinnerService.spin('spinner');
	}

	$scope.stopSpin = function(){
		usSpinnerService.stop('spinner');
	}


	$scope.fetchData = function(keyword){

	   var finishedLookingInPincodes =	dataService.fetchPincode(keyword).then(function(response){
			$scope.results = response.data.records;	
		});

	    var finishedLookingInBO = finishedLookingInPincodes.then(function(){	    	
		    dataService.fetchOfficeBO(keyword).then(function(response){
		    	if($scope.results.length == 0)
			    {			    	
					$scope.results = response.data.records;
				}
	    	});
	    });

	    var finishedLookingInSO = finishedLookingInBO.then(function(){
    		dataService.fetchOfficeSO(keyword).then(function(response){
		    	if($scope.results.length == 0)
		    	{
					$scope.results = response.data.records;
				}
	    	});	    
	    });

	    var finishedLookingInHO = finishedLookingInSO.then(function(){
	    		dataService.fetchOfficeHO(keyword).then(function(response){ 
    			if($scope.results.length == 0)
	    		{
					$scope.results = response.data.records;
				}
	    	});
	    });

	    usSpinnerService.stop('spinner');
	}

}]);
