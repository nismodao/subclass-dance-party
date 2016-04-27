$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });

  $('.addDancerButtonOne').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });

  $('.addDancerButtonTwo').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });

  $('.lineUp').on('click', function(event) {
    var line = {
      top: '600px',
      left: '30px'
    };
    
    for (var i = 0; i < window.dancers.length; i++) {
      line.left = (parseInt(line.left) + 50) + 'px';
      window.dancers[i].stop(true, true, true);
      window.dancers[i].animate(line);
    } 
  });
  $('body').on('click', '.dancer', function() {
    $(this).remove();
    
  });

  $('body').on('click', '.dejeDancer', function() {
    $(this).remove();
  });

  $('body').on('click', '.happyDancer', function() {
    $(this).remove();
  });



  if (window.dancers.length >= 2) { 

    var c1x,c2x,c1y,c2y;
 
    for (var i = 0; i < window.dancers.length; i++) {

      window.dancers[i].offset().left = c1x;
      window.dancers[i+1].offset().left = c2x;

      window.dancers[i].offset().top = c1y;
      window.dancers[i+1].offset().top = c2y;

      var dx = c1x - c2x;
      var dy = c1y - c2y;
      var dist = c1x + c2y;
     
      if (dx * dx + dy * dy <= dist * dist) alert("hey");
      }
    }
});





  
















