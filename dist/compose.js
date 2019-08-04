"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function compose() {
    var funcs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        funcs[_i] = arguments[_i];
    }
    return funcs.reduce(function (previousFunction, currentFunction) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return currentFunction(previousFunction.apply(void 0, tslib_1.__spread(args)));
        };
    });
}
exports.default = compose;
//# sourceMappingURL=compose.js.map