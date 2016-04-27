// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  this.something;

//   if (window.dancers.length > 2) this.collide();
// };
}

makeDancer.prototype.step = function () {
  var context = this;
  var clearID = setTimeout(function () { context.step(); }, this.timeBetweenSteps);
  this.something = clearID;//clearTimeout(clearID);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};




















