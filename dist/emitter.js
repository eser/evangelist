"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function emitter(events, eventName, args, subscribers) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var isEventWildcard, argsPass, _loop_1, _a, _b, eventKey, e_1_1;
        var e_1, _c;
        return tslib_1.__generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    isEventWildcard = (eventName === '*');
                    argsPass = (args !== undefined) ? args : [];
                    _loop_1 = function (eventKey) {
                        var _loop_2, _a, _b, eventSubscriber, e_2_1;
                        var e_2, _c;
                        return tslib_1.__generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    if (!isEventWildcard && eventName !== eventKey) {
                                        return [2, "continue"];
                                    }
                                    _loop_2 = function (eventSubscriber) {
                                        return tslib_1.__generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (subscribers !== undefined) {
                                                        subscribers.forEach(function (subscriber) {
                                                            subscriber({ event: eventKey, subscriber: eventSubscriber.name, args: args });
                                                        });
                                                    }
                                                    return [4, eventSubscriber.apply(void 0, tslib_1.__spread(argsPass))];
                                                case 1:
                                                    _a.sent();
                                                    return [2];
                                            }
                                        });
                                    };
                                    _d.label = 1;
                                case 1:
                                    _d.trys.push([1, 6, 7, 8]);
                                    _a = (e_2 = void 0, tslib_1.__values(events[eventKey])), _b = _a.next();
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
                    _a = tslib_1.__values(Object.keys(events)), _b = _a.next();
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
exports.default = emitter;
//# sourceMappingURL=emitter.js.map