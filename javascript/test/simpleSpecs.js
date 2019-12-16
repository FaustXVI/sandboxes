"use strict";
import chai from "chai";

chai.should();

describe('Simple test should', () => {
    it('work', () => {
        (1).should.deep.equal(1);
    });
});
