var Game = function() {
  var bandInstruments = ["clarinet", "alto-saxophone", "timpani", "trombone", "flute", "french-horn", "bass-guitar"];
  this.solution = bandInstruments[Math.floor(Math.random()*bandInstruments.length)];
  this.solutionArray = this.solution.split("");
}

Game.prototype.guess = function(letter) {
    for(var i = 0; i < this.solutionArray.length; i++) {
      if (letter === this.solutionArray[i]) {
        return true;
      } else {
        return false;
      }
    }
  }




  //attempted .indexOf();
      // var guess = "r";
      // this.solutionArray.indexOf("r");
      // if (indexOf >= 0) {
      //   return true;
      // } else {
      //   return false;
      // }



  //Attempted REGEX
      // // var guess = "r";
      // var re = /r/g;
      // // console.log(re);
      // var match = re.exec(this.solutionArray);
      //
      // if (??) {
      //   return true;
      // }
      // else {
      //   return false;
      // }
      //

  // var re = /guess/; //make this global
  // console.log(re);
  // var match = re.exec(this.solutionArray);
  // var position = match.index;
