var MakeSquareDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  var test = this.$node;

  this.$node.append($('<img width="50px" class="joseph" src=joseph.jpg></img>'));
  this.$node.mouseover(function() {
    var styleSettings = {
      top: top * Math.random(),
      left: left * Math.random()
    };
    test.css(styleSettings);
  });

  // this.setPosition(this.top, this.left);
};

MakeSquareDancer.prototype = Object.create(MakeDancer.prototype);
MakeSquareDancer.prototype.constructor = MakeSquareDancer;


MakeSquareDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // this.$node.toggle();
};

MakeSquareDancer.prototype.lineUp = function() {
  var styleSettings = { left: '10%' };
  this.$node.css(styleSettings);
};