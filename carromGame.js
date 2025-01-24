class CarromGame {
    constructor(player1, player2) {
        this.players = [player1, player2];
        this.turn = 0; // 0 for player1's turn, 1 for player2's turn
        this.pieces = { player1: 9, player2: 9, queen: 1 }; // Pieces of players and queen
        this.score = { player1: 0, player2: 0 };
    }

    // Start the game
    startGame() {
        console.log('Game Started!');
        this.playTurn();
    }

    // Play the turn for the current player
    playTurn() {
        console.log(`${this.players[this.turn]}'s turn.`);
        // Basic game logic, here you can simulate a shot
        const shotSuccess = Math.random() > 0.5; // Randomized shot success
        if (shotSuccess) {
            this.handleShot();
        } else {
            console.log('Shot missed!');
        }
        this.switchTurn();
    }

    // Handle a successful shot
    handleShot() {
        if (this.turn === 0) {
            this.pieces.player1--;
            this.score.player1++;
            console.log(`${this.players[0]} successfully pocketed a piece!`);
        } else {
            this.pieces.player2--;
            this.score.player2++;
            console.log(`${this.players[1]} successfully pocketed a piece!`);
        }

        // Check for winner
        if (this.pieces.player1 === 0) {
            console.log(`${this.players[0]} wins!`);
            return;
        } else if (this.pieces.player2 === 0) {
            console.log(`${this.players[1]} wins!`);
            return;
        }
    }

    // Switch turn between players
    switchTurn() {
        this.turn = this.turn === 0 ? 1 : 0;
        // Simulate a delay without causing issues in tests
        this.playTurn();  // Continue immediately for the next turn
    }
}

module.exports = CarromGame;
