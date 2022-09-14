var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.append($('<img class="roshan" width="50px" src=roshan.jpeg></img>'));
  var test = this.$node;
  this.$node.mouseover(function() {
    var styleSettings = {
      top: top * Math.random(),
      left: left * Math.random()
    };
    test.css(styleSettings);
  });
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;


MakeBlinkyDancer.prototype.step = function() {
// var oldStep = this.step;
  // call the old version of step at the beginning of any call to this new version of step
  MakeDancer.prototype.step.call(this);
  // oldStep.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

MakeBlinkyDancer.prototype.lineUp = function() {
  var styleSettings = { left: '60%' };
  this.$node.css(styleSettings);
};