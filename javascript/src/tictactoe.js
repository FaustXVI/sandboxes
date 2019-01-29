import fs from "fs";

const EMPTY = Symbol.for("Empty");
const PLAYER_1 = Symbol.for("Player1");
const PLAYER_2 = Symbol.for("Player2");
const NO_WINNER = Symbol.for("No winner");

const isWonBy = player => line => {
    return line.filter(p => p === player).length === 3;
};

const toSimpleObject = (game) => {
    return {
        player: Symbol.keyFor(game.currentPlayer),
        matrix: game.matrix.map(l => l.map(Symbol.keyFor))
    };

};
const fromSimpleObject = (object) => {
    let ticTacToe = new TicTacToe();
    ticTacToe.currentPlayer = Symbol.for(object.player);
    ticTacToe.matrix = object.matrix.map(l => l.map(Symbol.for));
    return ticTacToe;
};

class TicTacToe {
    constructor() {
        this.matrix = [
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY],
        ];
        this.currentPlayer = PLAYER_1;
    }

    play(x, y) {
        if (this.canPlayIn(x, y)) {
            this.matrix[x][y] = this.currentPlayer;
            this._changePlayer();
        }
    }

    canPlayIn(x, y) {
        return this.matrix[x][y] === EMPTY;
    }

    _changePlayer() {
        if (this.currentPlayer === PLAYER_1) {
            this.currentPlayer = PLAYER_2;
        } else {
            this.currentPlayer = PLAYER_1;
        }
    }

    winner() {
        if (this._winningArrangements().some(isWonBy(PLAYER_1))) return PLAYER_1;
        if (this._winningArrangements().some(isWonBy(PLAYER_2))) return PLAYER_2;
        return NO_WINNER;
    }

    _winningArrangements() {
        return this._lines().concat(this._columns()).concat(this._diagonals());
    }

    _lines() {
        return this.matrix;
    }

    _columns() {
        let columns = [];
        for (let c = 0; c < 3; c++) {
            columns.push([this.matrix[0][c], this.matrix[1][c], this.matrix[2][c]]);
        }
        return columns;
    }

    _diagonals() {
        let diagonals = [];
        diagonals.push([this.matrix[0][0], this.matrix[1][1], this.matrix[2][2]]);
        diagonals.push([this.matrix[0][2], this.matrix[1][1], this.matrix[2][0]]);
        return diagonals;
    }

    asMatrix() {
        return this.matrix;
    }
}

export {TicTacToe, EMPTY, NO_WINNER, PLAYER_1, PLAYER_2, toSimpleObject, fromSimpleObject}