app.factory("fhtagnScript", [function() {
	return {
		gameState : 0,

		script : [
			{
				type : "question",
				options : [
					"hello",
					"world",
					"the dark one",
					"rises"
				]
			},
			{
				type : "statement",
				text : "why hello there"
			},
			{
				type : "question",
				options : [
					"goodbye",
					"world",
					"ia ia",
					"fhtagn"
				]
			}
		],

		getNextScriptItem : function() {
			if (this.gameState >= this.script.length) {
				return false;
			}
			return this.script[this.gameState++];
		}
	};
}]);
