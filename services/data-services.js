app.factory('dataService',['$http', function($http){
	
	var urlBase = "https://data.gov.in/api/datastore/resource.json?"
						+"resource_id=0a076478-3fd3-4e2c-b2d2-581876f56d77"
						+"&api-key=[YOUR-API-KEY]";
	var dataService = {};
	dataService.fetchPincode =  function(pincode)
	{
		console.log("dataService(), fetching...");
		var api = urlBase 
				+ "&limit=100"
				+ "&filters[pincode]="+pincode;
		console.log("dataService()", api);		
		return $http.get(api);	
	};
	return dataService;
	
}]);