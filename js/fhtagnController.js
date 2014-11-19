app.controller('fhtagnController', ['$compile', 'fhtagnScript', function($compile, fhtagnScript) {
  this.visible = [];
  this.health = 5.0;

  this.renderNext = function(index) {
    var item = false;
    if(typeof(index) === "undefined") {
      item = fhtagnScript.getNextScriptItem();
    }
    else {
      response = fhtagnScript.getResponseItem(index);
      item = response[0];
      this.health = this.health + response[1];
    }
    if (item) {
      if (this.health <= 0) {
        this.visible = [window.SCRIPT['loss']]
      }
      else {
        this.visible = [item];
      }
    }
  }.bind(this);

  this.renderNext();
}]);
