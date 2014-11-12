app.controller('fhtagnController', ['$compile', 'fhtagnScript', function($compile, fhtagnScript) {
	this.visible = [];

	this.pushNext = function(index) {
		this.visible.push(fhtagnScript.getNextScriptItem());
	}.bind(this);

	this.pushNext();
}]);
