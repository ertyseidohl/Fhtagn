app.directive('fhtagnStatement', function() {
	return {
		restrict : 'E',
		scope : {
			options : "=",
			next : "&"
		},
		templateUrl : './templates/fhtagn-statement.html'
	};
});
