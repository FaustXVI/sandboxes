"use strict";
import chai from "chai";
import { get42 } from "../src/simpleCode"
chai.should();

describe('Something', () => {
    it('should pass', () => {
        get42().should.equal(42);
    });
});
