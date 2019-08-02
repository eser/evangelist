"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var iterate_1 = __importDefault(require("../iterate"));
var compose_1 = __importDefault(require("../compose"));
describe('iterate', function () {
    test('basic', function () { return __awaiter(_this, void 0, void 0, function () {
        var gen1, total, func1, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gen1 = function gen() {
                        return __generator(this, function (_a) {
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
    test('async', function () { return __awaiter(_this, void 0, void 0, function () {
        var delay, gen1, total, func1, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    delay = function (ms, value) { return new Promise(function (resolve, reject) {
                        setTimeout(function () { return resolve(value); }, ms);
                    }); };
                    gen1 = function gen() {
                        return __generator(this, function (_a) {
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
                        return __awaiter(this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
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
    test('with compose', function () { return __awaiter(_this, void 0, void 0, function () {
        var gen1, total, getValue, add5, sumWithTotal, result;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gen1 = function gen() {
                        return __generator(this, function (_a) {
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
                    add5 = function (value) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4, value];
                            case 1: return [2, (_a.sent()) + 5];
                        }
                    }); }); };
                    sumWithTotal = function (value) { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
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