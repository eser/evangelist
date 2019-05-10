"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function iterate(iterable, func) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var e_1, _a, _b, _c, value, e_1_1;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _d.trys.push([0, 6, 7, 8]);
                    return [4, iterable];
                case 1:
                    _b = tslib_1.__values.apply(void 0, [_d.sent()]), _c = _b.next();
                    _d.label = 2;
                case 2:
                    if (!!_c.done) return [3, 5];
                    value = _c.value;
                    return [4, func(value)];
                case 3:
                    _d.sent();
                    _d.label = 4;
                case 4:
                    _c = _b.next();
                    return [3, 2];
                case 5: return [3, 8];
                case 6:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 8];
                case 7:
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 8: return [2];
            }
        });
    });
}
exports.default = iterate;
//# sourceMappingURL=iterate.js.map