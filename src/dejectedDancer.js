var makeDejectedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);  
  this.$node = $('<span class="dejeDancer"></span>').prepend('<img src="images/ehonda.gif" height="270" width="470"/>');
  this.setPosition(top, left);


  //  var collide = function () {
  //   var c1x,c2x,c3x,c4x;

  // if (window.dancers.length >= 2) {  
  //   for (var i = 0; i < window.dancers.length; i++) {

  //     window.dancers[i].offset().left = c1x;
  //     window.dancers[i+1].offset().left = c2x;

  //     window.dancers[i].offset().top = c1y;
  //     window.dancers[i+1].offset().top = c2y;

  //     var dx = c1x - c2x;
  //     var dy = c1y - c2y;
  //     var dist = c1x + c2y;
     
  //       if (dx * dx + dy * dy <= dist * dist) alert("hey");
  //     }
  //   }
  // }

 // collide();
  
};

makeDejectedDancer.prototype = Object.create(makeDancer.prototype);
makeDejectedDancer.prototype.constructor = makeDejectedDancer;

makeDejectedDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  var random = Math.random() * 1000 + 'px';
  this.$node.animate({left: random}, 1000, 'linear')
  // .animate({top: random}, 1000, 'linear')
  // .animate({left: random}, 1000, 'linear')
  .animate({right: random}, 1000, 'linear');
  // this.$node.toggle();
};
