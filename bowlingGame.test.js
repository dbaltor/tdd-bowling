const BowlingGame = require("./bowlingGame");

test("checking if the bowling game return a score", () => {
  let game = new BowlingGame(); 
  expect(game.getScore()).toBe(0);
});


test("assert the game is 10 frames", () => {
  // Given
  let game = new BowlingGame(); 
  // When
  // Then
  expect(game.getFinished()).toBe(false);
  // When
  game.roll(0); game.roll(0); 
  game.roll(0); game.roll(0); 
  game.roll(0); game.roll(0); 
  game.roll(0); game.roll(0); 
  game.roll(0); game.roll(0); 
  game.roll(0); game.roll(0); 
  game.roll(0); game.roll(0);
  game.roll(0); game.roll(0); 
  game.roll(0); game.roll(0); 
  // Then
  expect(game.getFinished()).toBe(false);
  // When
  game.roll(0); game.roll(0);
  // Then
  expect(game.getFinished()).toBe(true);
});


test("assert rolls add up to the score", () => {
  // Given
  let game = new BowlingGame(); 
  // When
  game.roll(4);
  game.roll(5);
  // Then
  expect(game.getScore()).toBe(9);
});

test("assert rolls between 0 and 10 are valid", () => {
  // Given
  let game = new BowlingGame(); 
  // When
  game.roll(5);
  // Then
  expect(game.getScore()).toBe(5);
})

test("assert rolls above 10 are invalid", () => {
  // Given 
  let game = new BowlingGame(); 
  // When
  game.roll(11);
  // Then
  expect(game.getScore()).toBe(0);
})

test("assert frame score does not add up above 10", () => {
  // Given
  let game = new BowlingGame(); 
  // When
  game.roll(7);
  game.roll(5);
  // Then
  expect(game.getFrameScore()).toBe(7);
});

test("assert each frame can have up to 2 rolls", () => {
  // Given
  let game = new BowlingGame(); 
  // When
  game.roll(1);
  game.roll(2);
  game.roll(3);
  // Then
  expect(game.getFrameRoll()).toBe(1);
});

test("assert it is strike", () => {
  // Given
  let game = new BowlingGame(); 
  // When
  game.roll(10);
  // Then
  expect(game.isStrike()).toBe(true);
  // Given 
  game = new BowlingGame(); 
  // When
  game.roll(5);
  // Then
  expect(game.isStrike()).toBe(false);
  // Given 
  game = new BowlingGame(); 
  // When
  game.roll(6);
  game.roll(4);
  // Then
  expect(game.isStrike()).toBe(false);
});

test("assert it is spare", () => {
  // Given
  let game = new BowlingGame();
  // When
  game.roll(5);
  game.roll(5);
  // Then
  expect(game.isSpare()).toBe(true);
  // Given
  game = new BowlingGame();
  // When
  game.roll(7);
  game.roll(4);
  // Then
  expect(game.isSpare()).toBe(false);
  // Given 
  game = new BowlingGame();
  // When
  game.roll(7);
  game.roll(2);
  // Then
  expect(game.isSpare()).toBe(false);
});

test("assert if a spare is scored, the next roll is added as a bonus", () => {
  // Given
  let game = new BowlingGame();
  // When
  game.roll(7);
  game.roll(3);
  game.roll(4);
  // Then
  expect(game.getScore()).toBe(18);
});

test("assert if a strike is scored, the next 2 rolls are added as a bonus", () => {
  // Given
  let game = new BowlingGame();
  // When
  game.roll(10);
  game.roll(3);
  game.roll(4);
  // Then
  expect(game.getScore()).toBe(24);
});

test("assert a perfect game is 12 successive strikes and score 300 points", () => {
  // Given
  let game = new BowlingGame();
  // When
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  game.roll(10);
  // Then
  expect(game.getScore()).toBe(300);
});

