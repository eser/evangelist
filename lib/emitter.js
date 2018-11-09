"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function emitter(events, eventName, args, subscribers) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var hasSubscribers, isEventWildcard, argsPass, _loop_1, _a, _b, _i, eventKey;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    hasSubscribers = (subscribers !== undefined);
                    isEventWildcard = (eventName === '*');
                    argsPass = (args !== undefined) ? args : [];
                    _loop_1 = function (eventKey) {
                        var e_1, _a, _loop_2, _b, _c, eventSubscriber, e_1_1;
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
                                                    if (hasSubscribers) {
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
                                    _b = tslib_1.__values(events[eventKey]), _c = _b.next();
                                    _d.label = 2;
                                case 2:
                                    if (!!_c.done) return [3, 5];
                                    eventSubscriber = _c.value;
                                    return [5, _loop_2(eventSubscriber)];
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
                    };
                    _a = [];
                    for (_b in events)
                        _a.push(_b);
                    _i = 0;
                    _c.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3, 4];
                    eventKey = _a[_i];
                    return [5, _loop_1(eventKey)];
                case 2:
                    _c.sent();
                    _c.label = 3;
                case 3:
                    _i++;
                    return [3, 1];
                case 4: return [2];
            }
        });
    });
}
exports.default = emitter;
//# sourceMappingURL=emitter.js.map