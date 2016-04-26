var makeDejectedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);  
  this.$node = $('<span class="dejeDancer"></span>').prepend('<img src="/images/indian.jpg" height="300" width="120 "/>');
  this.setPosition(top, left);
  
};

makeDejectedDancer.prototype = Object.create(makeDancer.prototype);
makeDejectedDancer.prototype.constructor = makeDejectedDancer;

makeDejectedDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};
