app.directive('fhtagnQuestion', function() {
	return {
		restrict : 'E',
		templateUrl : './templates/fhtagn-question.html',
		scope : {
			options : "@"
		}
	};
});
