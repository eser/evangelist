"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var curry_1 = tslib_1.__importDefault(require("../curry"));
describe('curry', function () {
    test('basic', function () {
        var sum = function (a, b) { return a + b; };
        var sumWith5 = curry_1.default(sum, 5);
        var result = sumWith5(3);
        expect(result).toEqual(8);
    });
});
//# sourceMappingURL=curry.js.map