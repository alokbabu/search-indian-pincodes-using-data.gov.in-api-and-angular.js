app.factory('dataService',['$http', '$q', function($http, $q){

	var deferred = $q.defer();
	
	var urlBase = "https://data.gov.in/api/datastore/resource.json?"
						+"resource_id=0a076478-3fd3-4e2c-b2d2-581876f56d77"
						+"&api-key=[YOUR-API]";
	
	var dataService = {};
	

	dataService.fetchPincode =  function(pincode){
		console.log("dataService(), fetching...");
		var api = urlBase 
				+ "&limit=100"
				+ "&filters[pincode]="+pincode;			
		return $http.get(api);
	};

	dataService.fetchOfficeBO = function(officename){		
		var api = urlBase 
				+ "&limit=100"
				+ "&filters[officename]="+officename+" B.O";			
		return $http.get(api);		
	}

	dataService.fetchOfficeSO = function(officename){		
		var api = urlBase 
				+ "&limit=100"
				+ "&filters[officename]="+officename+" S.O";		
		return $http.get(api);		
	}


	dataService.fetchOfficeHO = function(officename){		
		var api = urlBase 
				+ "&limit=100"
				+ "&filters[officename]="+officename+" H.O";			
		return $http.get(api);		
	}

	return dataService;
	
}]);


