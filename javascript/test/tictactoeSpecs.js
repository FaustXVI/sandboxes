"use strict";
import {expect} from "chai";
import {TicTacToe, EMPTY, NO_WINNER, PLAYER_1, PLAYER_2, fromSimpleObject, toSimpleObject} from "../src/tictactoe"

describe('TicTacToe', () => {
    it('starts empty', () => {
        let ticTacToe = new TicTacToe();
        expect(ticTacToe.asMatrix()).to.deep.equal([
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY],
            [EMPTY, EMPTY, EMPTY],
        ]);
    });
    describe('player one is first to play', () => {
        it('in 0, 0', () => {
            let ticTacToe = new TicTacToe();
            ticTacToe.play(0, 0);
            expect(ticTacToe.asMatrix()).to.deep.equal([
                [PLAYER_1, EMPTY, EMPTY],
                [EMPTY, EMPTY, EMPTY],
                [EMPTY, EMPTY, EMPTY],
            ]);
        });
        it('in 1, 1', () => {
            let ticTacToe = new TicTacToe();
            ticTacToe.play(1, 1);
            expect(ticTacToe.asMatrix()).to.deep.equal([
                [EMPTY, EMPTY, EMPTY],
                [EMPTY, PLAYER_1, EMPTY],
                [EMPTY, EMPTY, EMPTY],
            ]);
        });
    });
    describe('player two is second to play', () => {
        it('in 0, 0', () => {
            let ticTacToe = new TicTacToe();
            ticTacToe.play(1, 1);
            ticTacToe.play(0, 0);
            expect(ticTacToe.asMatrix()).to.deep.equal([
                [PLAYER_2, EMPTY, EMPTY],
                [EMPTY, PLAYER_1, EMPTY],
                [EMPTY, EMPTY, EMPTY],
            ]);
        });
    });
    describe('players alternates', () => {
        it('3 plays', () => {
            let ticTacToe = new TicTacToe();
            ticTacToe.play(1, 1);
            ticTacToe.play(0, 0);
            ticTacToe.play(2, 2);
            expect(ticTacToe.asMatrix()).to.deep.equal([
                [PLAYER_2, EMPTY, EMPTY],
                [EMPTY, PLAYER_1, EMPTY],
                [EMPTY, EMPTY, PLAYER_1],
            ]);
        });
    });
    describe('ignores play if already occupied', () => {
        it('in 1,1', () => {
            let ticTacToe = new TicTacToe();
            ticTacToe.play(1, 1);
            ticTacToe.play(1, 1);
            expect(ticTacToe.asMatrix()).to.deep.equal([
                [EMPTY, EMPTY, EMPTY],
                [EMPTY, PLAYER_1, EMPTY],
                [EMPTY, EMPTY, EMPTY],
            ]);
            ticTacToe.play(0, 0);
            expect(ticTacToe.asMatrix()).to.deep.equal([
                [PLAYER_2, EMPTY, EMPTY],
                [EMPTY, PLAYER_1, EMPTY],
                [EMPTY, EMPTY, EMPTY],
            ]);
        });
    });
    describe('detects if a player won', () => {
        it('no winner', () => {
            let ticTacToe = new TicTacToe();
            expect(ticTacToe.winner()).to.equal(NO_WINNER);
        });
        it('player one wins on first line', () => {
            let ticTacToe = new TicTacToe();
            ticTacToe.play(0, 0);
            ticTacToe.play(1, 0);
            ticTacToe.play(0, 1);
            ticTacToe.play(1, 1);
            ticTacToe.play(0, 2);
            expect(ticTacToe.winner()).to.equal(PLAYER_1);
        });
        it('player one wins on second line', () => {
            let ticTacToe = new TicTacToe();
            ticTacToe.play(1, 0);
            ticTacToe.play(0, 0);
            ticTacToe.play(1, 1);
            ticTacToe.play(0, 1);
            ticTacToe.play(1, 2);
            expect(ticTacToe.winner()).to.equal(PLAYER_1);
        });
        it('player one wins on first column', () => {
            let ticTacToe = new TicTacToe();
            ticTacToe.play(0, 0);
            ticTacToe.play(0, 1);
            ticTacToe.play(1, 0);
            ticTacToe.play(1, 1);
            ticTacToe.play(2, 0);
            expect(ticTacToe.winner()).to.equal(PLAYER_1);
        });
        it('player one wins on second column', () => {
            let ticTacToe = new TicTacToe();
            ticTacToe.play(0, 1);
            ticTacToe.play(0, 0);
            ticTacToe.play(1, 1);
            ticTacToe.play(1, 0);
            ticTacToe.play(2, 1);
            expect(ticTacToe.winner()).to.equal(PLAYER_1);
        });
        it('player one wins on first diagonal', () => {
            let ticTacToe = new TicTacToe();
            ticTacToe.play(0, 0);
            ticTacToe.play(0, 1);
            ticTacToe.play(1, 1);
            ticTacToe.play(1, 0);
            ticTacToe.play(2, 2);
            expect(ticTacToe.winner()).to.equal(PLAYER_1);
        });
        it('player one wins on second diagonal', () => {
            let ticTacToe = new TicTacToe();
            ticTacToe.play(0, 2);
            ticTacToe.play(0, 1);
            ticTacToe.play(1, 1);
            ticTacToe.play(1, 0);
            ticTacToe.play(2, 0);
            expect(ticTacToe.winner()).to.equal(PLAYER_1);
        });
        it('player two wins on first line', () => {
            let ticTacToe = new TicTacToe();
            ticTacToe.play(2, 2);
            ticTacToe.play(0, 0);
            ticTacToe.play(1, 0);
            ticTacToe.play(0, 1);
            ticTacToe.play(1, 1);
            ticTacToe.play(0, 2);
            expect(ticTacToe.winner()).to.equal(PLAYER_2);
        });
    });
    it('transforms to simple object', () => {
        let ticTacToe = new TicTacToe();
        let read = fromSimpleObject(toSimpleObject(ticTacToe));
        expect(read).to.deep.equal(ticTacToe);
    });
    it('transforms to simple object after playing', () => {
        let ticTacToe = new TicTacToe();
        ticTacToe.play(0, 0);
        let read = fromSimpleObject(toSimpleObject(ticTacToe));
        expect(read).to.deep.equal(ticTacToe);
    });
});
