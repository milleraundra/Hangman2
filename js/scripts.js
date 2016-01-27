var Game = function() {
  var bandInstruments = ["clarinet", "alto-saxophone", "timpani", "trombone", "flute", "french-horn", "bass-guitar"];
  // this.solution = bandInstruments[Math.floor(Math.random()*bandInstruments.length)];
  this.solution = "trombone";
  this.solutionArray = this.solution.split("");

  Game.prototype.guess = function() {
    var guess = "r";
    var re = /r/g;
    console.log(re);
    var match = re.exec(this.solutionArray);

    if (??) {
      return true;
    }
    else {
      return false;
    }


  }

  // var re = /guess/; //make this global
  // console.log(re);
  // var match = re.exec(this.solutionArray);
  // var position = match.index;
}
