"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var iterate_1 = tslib_1.__importDefault(require("../iterate"));
var compose_1 = tslib_1.__importDefault(require("../compose"));
describe('iterate', function () {
    test('basic', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var gen1, total, func1, result;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gen1 = function gen() {
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, 1];
                                case 1:
                                    _a.sent();
                                    return [4, 2];
                                case 2:
                                    _a.sent();
                                    return [4, 3];
                                case 3:
                                    _a.sent();
                                    return [2];
                            }
                        });
                    };
                    total = 0;
                    func1 = function (x) { total += x; };
                    return [4, iterate_1.default(gen1(), func1)];
                case 1:
                    result = _a.sent();
                    expect(total).toEqual(6);
                    return [2];
            }
        });
    }); });
    test('async', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var delay, gen1, total, func1, result;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    delay = function (ms, value) { return new Promise(function (resolve, reject) {
                        setTimeout(function () { return resolve(value); }, ms);
                    }); };
                    gen1 = function gen() {
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, 1];
                                case 1:
                                    _a.sent();
                                    return [4, 2];
                                case 2:
                                    _a.sent();
                                    return [4, 3];
                                case 3:
                                    _a.sent();
                                    return [2];
                            }
                        });
                    };
                    total = 0;
                    func1 = function func(x) {
                        return tslib_1.__awaiter(this, void 0, void 0, function () {
                            var _a;
                            return tslib_1.__generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _a = total;
                                        return [4, delay(10, x)];
                                    case 1:
                                        total = _a + _b.sent();
                                        return [2];
                                }
                            });
                        });
                    };
                    return [4, iterate_1.default(gen1(), func1)];
                case 1:
                    result = _a.sent();
                    expect(total).toEqual(6);
                    return [2];
            }
        });
    }); });
    test('with compose', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var gen1, total, getValue, add5, sumWithTotal, result;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gen1 = function gen() {
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4, { value: 1 }];
                                case 1:
                                    _a.sent();
                                    return [4, { value: 2 }];
                                case 2:
                                    _a.sent();
                                    return [4, { value: 3 }];
                                case 3:
                                    _a.sent();
                                    return [2];
                            }
                        });
                    };
                    total = 0;
                    getValue = function (x) { return Promise.resolve(x.value); };
                    add5 = function (value) { return tslib_1.__awaiter(_this, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, value];
                            case 1: return [2, (_a.sent()) + 5];
                        }
                    }); }); };
                    sumWithTotal = function (value) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return tslib_1.__generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = total;
                                    return [4, value];
                                case 1:
                                    total = _a + _b.sent();
                                    return [2];
                            }
                        });
                    }); };
                    return [4, iterate_1.default(gen1(), compose_1.default(getValue, add5, sumWithTotal))];
                case 1:
                    result = _a.sent();
                    expect(total).toEqual(21);
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=iterate.js.map