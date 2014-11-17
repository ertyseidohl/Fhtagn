app.factory("fhtagnScript", [function() {
  return {
    gameState : window.SCRIPT_START,

    script : window.SCRIPT,

    getNextScriptItem : function() {
      var gameState = this.script[this.gameState].next;
      if (gameState) {
        this.gameState = gameState;
        return this.script[this.gameState];
      }
      return false;
    },

    getQuestionAnswerItem : function(chosenAnswer) {
      var gameState = chosenAnswer["next"];
      if (gameState) {
        this.gameState = gameState;
        return this.script[this.gameState];
      }
      return false;
    }
  };
}]);
