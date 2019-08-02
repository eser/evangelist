"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var curryRight_1 = __importDefault(require("../curryRight"));
describe('curryRight', function () {
    test('basic', function () {
        var dec = function (a, b) { return a - b; };
        var decWith5 = curryRight_1.default(dec, 5);
        var result = decWith5(3);
        expect(result).toEqual(-2);
    });
});
//# sourceMappingURL=curryRight.js.map