(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.evangelist = {}));
}(this, function (exports) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
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
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
                return currentFunction(previousFunction.apply(void 0, __spread(args)));
            };
        });
    }

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
            return func.apply(void 0, __spread(args, args2));
        };
    }

    function curryRight(func) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return function () {
            var args2 = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args2[_i] = arguments[_i];
            }
            return func.apply(void 0, __spread(args2, args));
        };
    }

    function decorate(target, decorator) {
        return function func() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return decorator.apply(void 0, __spread(args, [target]));
        };
    }

    function dispatcher(state, mutators, subscribers) {
        return __awaiter(this, void 0, void 0, function () {
            var hasSubscribers, index, next;
            var _this = this;
            return __generator(this, function (_a) {
                hasSubscribers = (subscribers !== undefined);
                index = 0;
                next = function (newState) { return __awaiter(_this, void 0, void 0, function () {
                    var layer;
                    var _this = this;
                    return __generator(this, function (_a) {
                        layer = mutators[index];
                        if (layer === undefined) {
                            return [2, newState];
                        }
                        index += 1;
                        return [2, layer(newState, function (currentState) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    if (hasSubscribers) {
                                        subscribers.forEach(function (subscriber) {
                                            subscriber({ action: layer.name, previousState: newState, newState: currentState });
                                        });
                                    }
                                    return [2, next(currentState)];
                                });
                            }); })];
                    });
                }); };
                return [2, next(state)];
            });
        });
    }

    function emitter(events, eventName, args, subscribers) {
        return __awaiter(this, void 0, void 0, function () {
            var isEventWildcard, argsPass, _loop_1, _a, _b, eventKey, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        isEventWildcard = (eventName === '*');
                        argsPass = (args !== undefined) ? args : [];
                        _loop_1 = function (eventKey) {
                            var _loop_2, _a, _b, eventSubscriber, e_2_1;
                            var e_2, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        if (!isEventWildcard && eventName !== eventKey) {
                                            return [2, "continue"];
                                        }
                                        _loop_2 = function (eventSubscriber) {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (subscribers !== undefined) {
                                                            subscribers.forEach(function (subscriber) {
                                                                subscriber({ event: eventKey, subscriber: eventSubscriber.name, args: args });
                                                            });
                                                        }
                                                        return [4, eventSubscriber.apply(void 0, __spread(argsPass))];
                                                    case 1:
                                                        _a.sent();
                                                        return [2];
                                                }
                                            });
                                        };
                                        _d.label = 1;
                                    case 1:
                                        _d.trys.push([1, 6, 7, 8]);
                                        _a = (e_2 = void 0, __values(events[eventKey])), _b = _a.next();
                                        _d.label = 2;
                                    case 2:
                                        if (!!_b.done) return [3, 5];
                                        eventSubscriber = _b.value;
                                        return [5, _loop_2(eventSubscriber)];
                                    case 3:
                                        _d.sent();
                                        _d.label = 4;
                                    case 4:
                                        _b = _a.next();
                                        return [3, 2];
                                    case 5: return [3, 8];
                                    case 6:
                                        e_2_1 = _d.sent();
                                        e_2 = { error: e_2_1 };
                                        return [3, 8];
                                    case 7:
                                        try {
                                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                        return [7];
                                    case 8: return [2];
                                }
                            });
                        };
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        _a = __values(Object.keys(events)), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3, 5];
                        eventKey = _b.value;
                        return [5, _loop_1(eventKey)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7];
                    case 8: return [2];
                }
            });
        });
    }

    function iterate(iterable, func) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, value, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 6, 7, 8]);
                        return [4, iterable];
                    case 1:
                        _a = __values.apply(void 0, [_d.sent()]), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3, 5];
                        value = _b.value;
                        return [4, func(value)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3, 2];
                    case 5: return [3, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7];
                    case 8: return [2];
                }
            });
        });
    }

    var library = {
        compose: compose,
        curry: curry,
        curryRight: curryRight,
        decorate: decorate,
        dispatcher: dispatcher,
        emitter: emitter,
        iterate: iterate,
    };

    exports.compose = compose;
    exports.curry = curry;
    exports.curryRight = curryRight;
    exports.decorate = decorate;
    exports.default = library;
    exports.dispatcher = dispatcher;
    exports.emitter = emitter;
    exports.iterate = iterate;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
