var Game = function() {
  var bandInstruments = ["clarinet", "piccolo", "trumpet", "tubas", "alto-saxophone", "timpani", "trombone", "flute", "french-horn", "snare-drum", "tenor saxophone"];
  this.solution = bandInstruments[Math.floor(Math.random()*bandInstruments.length)];
  this.solutionArray = this.solution.split("");
}

/*** looks through the array for a matching letter ***/

Game.prototype.guess = function(letter) {
  // debugger;
    for(var i = 0; i < this.solutionArray.length; i++) {
      if (letter === this.solutionArray[i]) {

        // this.solutionArray.findIndex(letter, [], this.solutionArray);

        return true;
      } else {
        return false;
      }
    }
  }


// Displays un underscore for each letter in the solution array length

var underscore = function(solutionArray) {
  var underscoreArray = [];

  for (var i = 0; i < solutionArray.length; i++) {
    underscoreArray.push('_ ');
  }
  return underscoreArray.join("");
}


// REVEAL THE CORRECT LETTER





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
