"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function curry(func) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return function () {
        var args2 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args2[_i] = arguments[_i];
        }
        return func.apply(void 0, tslib_1.__spread(args, args2));
    };
}
exports.default = curry;
;
//# sourceMappingURL=curry.js.map