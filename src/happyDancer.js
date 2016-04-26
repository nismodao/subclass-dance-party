var makeHappyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);  
  this.$node = $('<span class="happyDancer"></span>').prepend('<img src="images/sean.gif" height="400" width="544"/>');
  this.setPosition(top, left);
  
};

makeHappyDancer.prototype = Object.create(makeDancer.prototype);
makeHappyDancer.prototype.constructor = makeHappyDancer;

makeHappyDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  var random = Math.random() * 1000 + 'px';
  this.$node.animate({left: random}, 1000, 'linear')
  // .animate({top: random}, 1000, 'linear')
  // .animate({bottom: random}, 1000, 'linear')
  .animate({right: random}, 1000, 'linear');
  // this.$node.toggle();
};


// makeHappyDancer.prototype.lineUp = function() {
//   var styleSettings = {
//     top: '5px',
//     left: '10px'
//   };
//   this.$node.animate(styleSettings);
// };
