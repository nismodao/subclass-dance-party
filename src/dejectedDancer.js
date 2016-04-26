var makeDejectedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);  
  this.$node = $('<span class="dejeDancer"></span>');
  this.setPosition(top, left);
  
};

makeDejectedDancer.prototype = Object.create(makeDancer.prototype);
makeDejectedDancer.prototype.constructor = makeDejectedDancer;

makeDejectedDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  this.$node.toggle();
};

