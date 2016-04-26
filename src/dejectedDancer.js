var makeDejectedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);  
  this.$node = $('<span class="dejeDancer"></span>').prepend('<img src="images/ehonda.gif" height="270" width="470"/>');
  this.setPosition(top, left);
  
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
