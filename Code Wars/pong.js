// create constructor class Pong that accepts max score a player can get throughout the game
// and a method called play
// players take turns hitting ball, always start with player 1
// paddles are 7 pixels in height
// ball is 1 pixel in height

class Pong {
    constructor(maxScore) {
        this.maxScore = maxScore;
        this.turn = 0;
        this.scores = {
            1: 0,
            2: 0
        },
        this.gameOver = false;
    }

    // play method
    // ball position - y coordinate of the ball
    // player position - y coordinate of the center of the current player's paddle

    play(ballPos, playerPos) {
        let diff = Math.abs(ballPos - playerPos);
        
        this.turn = this.turn % 2 + 1;
        if(this.gameOver){
            console.log("Game Over!");
            return 'Game Over!'
        }
        if(diff <= 3.5){
            console.log("Player " + this.turn + " has hit the ball!");
            return `Player ${this.turn} has hit the ball!`;
        }
        else{
            this.scores[this.turn] ++;

            if(this.scores[this.turn] == this.maxScore){
                this.gameOver = true;
                console.log("Player " + (this.turn % 2 + 1) + " has won the game!")
                return `Player ${this.turn % 2 + 1} has won the game!`;
            }
            console.log("Player " + this.turn + " has missed the ball!")
            return `Player ${this.turn} has missed the ball!`;
        }    
    }
}

let game = new Pong(2); // Here we say that the score to win is 2
game.play(50, 53)  // -> "Player 1 has hit the ball!";     // Player 1 hits the ball
game.play(100, 97) // -> "Player 2 has hit the ball!";     // Player 2 hits it back
game.play(0, 4)    // -> "Player 1 has missed the ball!";  // Player 1 misses so Player 2 gains a point
game.play(25, 25)  // -> "Player 2 has hit the ball!";     // Player 2 hits the ball
game.play(75, 25)  // -> "Player 2 has won the game!";     // Player 1 misses again. Having 2 points Player 2 wins, so we return the corresponding string
game.play(50, 50)  // -> "Game over"