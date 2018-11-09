"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var decorate_1 = tslib_1.__importDefault(require("../decorate"));
test('decorate', function () {
    var generator = function () { return 5; };
    generator = decorate_1.default(generator, function (func) { return func() * 2; });
    generator = decorate_1.default(generator, function (func) { return func() + 1; });
    var result = generator();
    expect(result).toEqual(11);
});
//# sourceMappingURL=decorate.js.map