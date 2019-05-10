"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function decorate(target, decorator) {
    return function func() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return decorator.apply(void 0, tslib_1.__spread(args, [target]));
    };
}
exports.default = decorate;
//# sourceMappingURL=decorate.js.map