"use strict";
import chai from "chai";

chai.should();

function range(start, end) {
    return [...Array(end).keys()].splice(start);
}

function inclusiveRange(start, end) {
    return range(start, end + 1);
}

function repeat(n, diamond) {
    return range(0, n).map(_ => diamond);
}

function repeatChar(n, c) {
    return repeat(n, c)
        .reduce((a, b) => a + b, "");
}

function repeatStar(n) {
    return repeatChar(n, "*");
}

function repeatSpace(n) {
    return repeatChar(n, " ");
}

function reverseString(s) {
    return s.split("").reverse().join("");
}

function fuseLines(l1, l2) {
    return l1.concat(l2.slice(1));
}

function zipWith(l1, l2, f) {
    return l1.map((_, i) => f(l1[i], l2[i]));
}

function fuseString(d1, d2) {
    return zipWith(d1, d2.map(s => s.substring(1)),
        (a, b) => a + b);
}

function horizontalMirror(top) {
    return fuseLines(top, [...top].reverse());
}

function verticalMirror(left) {
    return fuseString(left, [...left].map(reverseString));
}

function topLeftOfSize(height) {
    return inclusiveRange(1, height)
        .map(i => repeatSpace(height - i) + repeatStar(i));
}

function diamondOfSize(height) {
    return horizontalMirror(
        verticalMirror(
            topLeftOfSize(height)
        ));
}

function losanges(height, n) {
    if (n === 1) return diamondOfSize(height);

    let diamond = diamondOfSize(height);
    let line = repeat(n, diamond)
        .reduce(fuseString);
    return repeat(n, line)
        .reduce(fuseLines);
}

describe('Losanges', () => {
    let diamond = (n) => losanges(n, 1);
    describe('should be a diamond corresponding to the height', () => {
        for (let {height, result} of [
            {
                height: 1, result: [
                    "*"
                ]
            }, {
                height: 2, result: [
                    " * ",
                    "***",
                    " * "
                ]
            }, {
                height: 3, result: [
                    "  *  ",
                    " *** ",
                    "*****",
                    " *** ",
                    "  *  "
                ]
            }, {
                height: 4, result: [
                    "   *   ",
                    "  ***  ",
                    " ***** ",
                    "*******",
                    " ***** ",
                    "  ***  ",
                    "   *   "
                ]
            },
        ]) {
            it(`example for ${height}`, () => {
                diamond(height).should.deep.equal(result);
            })
        }
    });
    describe('should duplicate diamonds', () => {
        it('of size 1', () => {
            losanges(1, 2).should.deep.equal([
                "*"
            ]);
        });
        describe("of size 2", () => {
            let sizeTwoDiamonds = (n) => losanges(2, n);
            it('2 times', () => {
                sizeTwoDiamonds(2).should.deep.equal([
                    " * * ",
                    "*****",
                    " * * ",
                    "*****",
                    " * * ",
                ])
            });
            it('3 times', () => {
                sizeTwoDiamonds(3).should.deep.equal([
                    " * * * ",
                    "*******",
                    " * * * ",
                    "*******",
                    " * * * ",
                    "*******",
                    " * * * ",
                ])
            });
            it('4 times', () => {
                sizeTwoDiamonds(4).should.deep.equal([
                    " * * * * ",
                    "*********",
                    " * * * * ",
                    "*********",
                    " * * * * ",
                    "*********",
                    " * * * * ",
                    "*********",
                    " * * * * ",
                ])
            });
            it('5 times', () => {
                sizeTwoDiamonds(5).should.deep.equal([
                    " * * * * * ",
                    "***********",
                    " * * * * * ",
                    "***********",
                    " * * * * * ",
                    "***********",
                    " * * * * * ",
                    "***********",
                    " * * * * * ",
                    "***********",
                    " * * * * * ",
                ])
            });
        });
        describe("of size 3", () => {
            let sizeThreeDiamonds = (n) => losanges(3, n);
            it('2 times', () => {
                sizeThreeDiamonds(2).should.deep.equal([
                    "  *   *  ",
                    " *** *** ",
                    "*********",
                    " *** *** ",
                    "  *   *  ",
                    " *** *** ",
                    "*********",
                    " *** *** ",
                    "  *   *  ",
                ])
            });

            it('3 times', () => {
                sizeThreeDiamonds(3).should.deep.equal([
                    "  *   *   *  ",
                    " *** *** *** ",
                    "*************",
                    " *** *** *** ",
                    "  *   *   *  ",
                    " *** *** *** ",
                    "*************",
                    " *** *** *** ",
                    "  *   *   *  ",
                    " *** *** *** ",
                    "*************",
                    " *** *** *** ",
                    "  *   *   *  ",
                ])
            });
            it('4 times', () => {
                sizeThreeDiamonds(4).should.deep.equal([
                    "  *   *   *   *  ",
                    " *** *** *** *** ",
                    "*****************",
                    " *** *** *** *** ",
                    "  *   *   *   *  ",
                    " *** *** *** *** ",
                    "*****************",
                    " *** *** *** *** ",
                    "  *   *   *   *  ",
                    " *** *** *** *** ",
                    "*****************",
                    " *** *** *** *** ",
                    "  *   *   *   *  ",
                    " *** *** *** *** ",
                    "*****************",
                    " *** *** *** *** ",
                    "  *   *   *   *  ",
                ])
            });
        });
    });
});
