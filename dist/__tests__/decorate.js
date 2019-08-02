"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorate_1 = __importDefault(require("../decorate"));
describe('decorate', function () {
    test('basic', function () {
        var generator = function () { return 5; };
        generator = decorate_1.default(generator, function (func) { return func() * 2; });
        generator = decorate_1.default(generator, function (func) { return func() + 1; });
        var result = generator();
        expect(result).toEqual(11);
    });
});
//# sourceMappingURL=decorate.js.map