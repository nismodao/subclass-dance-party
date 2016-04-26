var makeHappyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);  
  this.$node = $('<span class="happyDancer"></span>').prepend('<img src="images/cammy.gif" height="290" width="350"/>');
  this.setPosition(top, left);
  
};

makeHappyDancer.prototype = Object.create(makeDancer.prototype);
makeHappyDancer.prototype.constructor = makeHappyDancer;

makeHappyDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  // this.$node.toggle();
};


makeHappyDancer.prototype.lineUp = function() {
  var styleSettings = {
    top: "5px",
    left: "10px"
  };
  this.$node.animate(styleSettings);
};

