"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var compose_1 = __importDefault(require("../compose"));
describe('compose', function () {
    test('basic', function () {
        var lower = function (x) { return x.toLowerCase(); };
        var chars = function (x) { return x.replace(/[^\w \\-]+/g, ''); };
        var spaces = function (x) { return x.split(' '); };
        var dashes = function (x) { return x.join('-'); };
        var slug = compose_1.default(lower, chars, spaces, dashes);
        var result = slug('Hello World!');
        expect(result).toEqual('hello-world');
    });
});
//# sourceMappingURL=compose.js.map