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

    getResponseItem : function(parentQuestionWithChosen) {
      var chosenNumber = parentQuestionWithChosen.chosen;
      var chosenAnswer = parentQuestionWithChosen.options[chosenNumber];
      var responseItem = this.script[chosenAnswer.next];
      var gameState = chosenAnswer["next"];

      if (!chosenAnswer.correct) {
        parentQuestionWithChosen.options[chosenNumber].selected = true;
      }

      if (gameState) {
        this.gameState = gameState;
        return responseItem;
      }
      return false;
    },
  };
}]);
