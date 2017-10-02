var lang = {
  "lightroom": "90%",
  "premiere": "65%",
  "photoshop": "45%",
  "python": "60%",
  "ruby": "85%",
  "frontend": "40%",
  "javascript": "25%",
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;
  
  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);
  
  multiply++;

});