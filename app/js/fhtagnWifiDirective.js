app.directive('fhtagnWifi', function() {
  return {
    restrict : 'E',
    templateUrl : './templates/fhtagn-wifi.html',
    scope : {
      signalStrength : "=",
    },
  };
});
