"use strict";
import {get42} from "./simple";
import {should} from "chai";

should();

describe("A test", () => {
    it("should check something", () => {
        get42().should.equal(42);
    });
});