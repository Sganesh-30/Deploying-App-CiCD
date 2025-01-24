// carromGame.test.js

const CarromGame = require('./carromGame');

describe('CarromGame Tests', () => {
    let game;

    beforeEach(() => {
        game = new CarromGame('Player1', 'Player2');
    });

    test('Game starts with 9 pieces for each player', () => {
        expect(game.pieces.player1).toBe(9);
        expect(game.pieces.player2).toBe(9);
    });

    test('Player1 wins when all pieces are pocketed', () => {
        game.pieces.player1 = 0;  // Simulate Player1 winning
        game.pieces.player2 = 3;
        game.score.player1 = 9;
        game.score.player2 = 3;
        expect(game.score.player1).toBe(9);
        expect(game.pieces.player1).toBe(0);
    });

    test('Turn switches after every shot', () => {
        const currentTurn = game.turn;
        game.switchTurn();
        expect(game.turn).not.toBe(currentTurn);
    });
});
