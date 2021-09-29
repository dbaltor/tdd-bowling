# TDD: The Bowling Game

A TDD exercise implementing the bowling game in Javascript.

The bowling excercise is:

Create a class with at least the following methods:

- roll(pins)
- getScore()

The rules for scoring are as follows:

- A game is 10 frames
- Each frame can have up to 2 rolls
- A spare is when you knock down all pins in a frame
- A strike is when you knock down all pins in the first roll of a
  frame
- The score for a frame is the number of pins knocked down
- If a spare is scored, the next roll is added as a bonus
- If a strike is scored, the next 2 rolls are added as a bonus
- A perfect game is 12 successive strikes and score 300 points  

## Exceptions & Edge Cases
For a real implementation of this you would want to check for errors, including the following:

- Negative number of pins passed to roll
- More than 10 pins passed to roll
- Roll called too many times

However, for this demonstration we are only focusing on the happy path.
