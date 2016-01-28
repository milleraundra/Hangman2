describe("Game", function() {
  it("will randomly select an item from the array, once it is selected ", function() {
    var newHangmanGame = new Game();
    expect(newHangmanGame.solution).to.be.a("string");
  });

  it("will split it out into individual letters.", function() {
    var newHangmanGame = new Game();
    expect(newHangmanGame.solutionArray).to.be.a("array");
  });

  it("will check the solution word for a chosen letter", function() {
    var newHangmanGame = new Game();
    expect(newHangmanGame.guess("z")).to.equal(false);
  });


  it("will display an underscore for each letter in the array", function() {
    var newHangmanGame = new Game();
    var testWord = "flute";
    expect(underscore(testWord)).to.eql("_ _ _ _ _ ");
  });
});
// var newGameGame = new Answer();
// var newPlayer = new Player();
// expect(newPlayer.guess("o")).to.equal(true);
//
//
//
//
