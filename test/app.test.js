const CarromGame = require('../carromGame');

describe('CarromGame Tests', () => {
    let game;

    beforeEach(() => {
        game = new CarromGame('Player1', 'Player2');
        game.setTestMode(true); // Disable automatic recursion during tests
    });

    test('Game starts with 9 pieces for each player', () => {
        expect(game.pieces.player1).toBe(9);
        expect(game.pieces.player2).toBe(9);
    });

    test('Player1 wins when all pieces are pocketed', () => {
        // Simulate Player1 pocketing all pieces (by calling handleShot multiple times)
        while (game.pieces.player1 > 0) {
            game.handleShot(); // Simulate Player1 making a shot
        }

        // Ensure Player1 wins
        expect(game.pieces.player1).toBe(0);
        expect(game.score.player1).toBe(9);  // Assuming Player1 pockets all pieces
    });

    test('Turn switches after every shot', () => {
        const currentTurn = game.turn;
        game.switchTurn(); // This now runs synchronously
        expect(game.turn).not.toBe(currentTurn);
    });

    // Mock console.log to suppress output during tests
    beforeAll(() => {
        console.log = jest.fn();
    });

    afterAll(() => {
        console.log.mockRestore();
    });
});
