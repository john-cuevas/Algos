// create a class ball. Ball objects should accept one argument for "ball type."
// If no arguments given, ball objects should instantiate with a "ball type" of "regular"

class Ball {
    constructor(ballType = "regular") {
        this.ballType = ballType;
    }
}