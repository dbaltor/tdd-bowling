const MAX_FRAMES = 10;

class BowlingGame {

  constructor() {
    this.newFrame = true;
    this.finished = false;
    this.score = 0;
    this.frame = 1;
    this.frameScore = 0;
    this.frameRoll = 0;
    this.bonus1 = 0;
    this.bonus2 = 0;
    // Uncomment to keep all rolls
    // this.currentRoll = 0;
    // this.rolls = [];
  }
  
  getFinished() {
    return this.finished;
  }

  getFrame() {
    return (this.frame > 10) ? 10 : this.frame;
  }

  getScore() {
    return this.score;
  }

  getFrameScore() {
    return this.frameScore;
  }

  getFrameRoll() {
    return this.frameRoll + 1;
  }

  roll(pins) {
    if (this.newFrame) {
      // Reset frame score
      this.frameScore = 0;
      this.frameRoll = 0;
      this.newFrame = false;
    }
    else {
      this.frameRoll++;
    }
    // Validate input and game still running
    if (!this.finished && this.frameScore + pins <= 10) {
      // Uncomment to keep all rolls
      // this.rolls[this.currentRoll++] = pins;
     
      if (this.frame <= 10) {
        if (this.frameRoll == 0) {
          this.frameScore = pins;
          if (this.isStrike()) {
            // Change to next frame
            this.frame++;
            this.newFrame = true;
          }
        }
        else {
          this.frameScore += pins;
          // Change to next frame
          this.frame++;
          this.newFrame = true;
        }

        this.score += (1 + this.bonus1) * pins;
        if (this.bonus2 > 0) {
          this.bonus2 = 0;
          this.bonus1 = 1;
        }
        else if (this.bonus1 > 0) {
          this.bonus1 = 0;
        }

        if (this.isSpare()) {
          // Add bonus to the next roll
          this.bonus1++;
        } 
        else if (this.isStrike()) {
          // Add bonus to the next two rolls
          this.bonus1++;
          this.bonus2++; 
        }
      } 
      else {
        // Bonus roll after the 10th frame
        this.score += this.bonus1 * pins;
        if (this.bonus2 > 0) {
          this.bonus2 = 0;
          this.bonus1 = 1;
        }
        else if (this.bonus1 > 0) {
          this.bonus1 = 0;
        }
      }  

      if (this.frame > 10 && this.bonus1 == 0) {
        this.finished = true;
      }
    }
  }

  isStrike() {
    return this.frameScore == 10 && this.frameRoll == 0;
  }

  isSpare() {
    return this.frameScore == 10 && this.frameRoll == 1;
  }

}

module.exports = BowlingGame;
