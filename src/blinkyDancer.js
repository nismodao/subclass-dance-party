var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);  
  this.$node = $('<span class="dancer"></span>').prepend('<img src="images/dhalsim.gif" height="300" width="245"/>');
  this.setPosition(top, left);
  
  context = this.$node;
  this.$node.on('click', function (event) {
    context.stop(true, true,true);
    //context.animate({left: '100px'});
  });
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(timeBetweenSteps) {
  
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  var random = Math.random() * 1000 + 'px';
  this.$node.animate({left: random}, 1000, 'linear');
  // .animate({top: random}, 1000, 'linear')
  // .animate({bottom: random}, 1000, 'linear')
  

};

// makeBlinkyDancer.prototype.hover = function () {


//   });


// };
 
