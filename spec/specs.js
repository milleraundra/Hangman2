describe("Game", function() {
  it("will randomly select an item from the array, once it is selected ", function() {
    var newHangmanGame = new Game();
    expect(newHangmanGame.solution).to.equal("trombone");
  });

  it("will split it out into individual letters.", function() {
    var newHangmanGame = new Game();
    expect(newHangmanGame.solutionArray).to.eql(["t","r","o","m","b","o","n","e"]);
  });

  it("will check the solution word for a chosen letter", function() {
    var newHangmanGame = new Game();
    expect(newHangmanGame.guess("r").to.eql(true));
  });
});


// var newGameGame = new Answer();
// var newPlayer = new Player();
// expect(newPlayer.guess("o")).to.equal(true);
//
//
//
//
