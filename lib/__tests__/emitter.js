"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var emitter_1 = tslib_1.__importDefault(require("../emitter"));
describe('emitter', function () {
    test('basic', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var sideEffectCounter, subscriberOne, subscriberTwo, events;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sideEffectCounter = 0;
                    subscriberOne = function () { return sideEffectCounter += 1; };
                    subscriberTwo = function () { return sideEffectCounter += 2; };
                    events = {
                        calculate: [subscriberOne, subscriberTwo],
                    };
                    return [4, emitter_1.default(events, 'calculate')];
                case 1:
                    _a.sent();
                    expect(sideEffectCounter).toEqual(3);
                    return [2];
            }
        });
    }); });
    test('with parameters', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var sideEffectCounter, subscriberOne, subscriberTwo, events, result;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sideEffectCounter = 0;
                    subscriberOne = function (value) { return sideEffectCounter += value; };
                    subscriberTwo = function (value) { return sideEffectCounter += value * 2; };
                    events = {
                        calculate: [subscriberOne, subscriberTwo],
                    };
                    return [4, emitter_1.default(events, 'calculate', [5])];
                case 1:
                    result = _a.sent();
                    expect(sideEffectCounter).toEqual(15);
                    return [2];
            }
        });
    }); });
    test('with wildcard events', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var sideEffectCounter, subscriberOne, subscriberTwo, events;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sideEffectCounter = 0;
                    subscriberOne = function () { return sideEffectCounter += 1; };
                    subscriberTwo = function () { return sideEffectCounter -= 2; };
                    events = {
                        inc: [subscriberOne],
                        dec: [subscriberTwo],
                    };
                    return [4, emitter_1.default(events, '*')];
                case 1:
                    _a.sent();
                    expect(sideEffectCounter).toEqual(-1);
                    return [2];
            }
        });
    }); });
    test('with subsriber', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var sideEffectCounter, subscriberOne, subscriberTwo, events, logs, logger, result;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sideEffectCounter = 0;
                    subscriberOne = function (value) { return sideEffectCounter += value; };
                    subscriberTwo = function (value) { return sideEffectCounter += value * 2; };
                    events = {
                        calculate: [subscriberOne, subscriberTwo],
                    };
                    logs = [];
                    logger = function (x) { return logs.push(x); };
                    return [4, emitter_1.default(events, 'calculate', [5], [logger])];
                case 1:
                    result = _a.sent();
                    expect(sideEffectCounter).toEqual(15);
                    expect(logs).toEqual([
                        {
                            event: 'calculate',
                            subscriber: 'subscriberOne',
                            args: [5],
                        },
                        {
                            event: 'calculate',
                            subscriber: 'subscriberTwo',
                            args: [5],
                        },
                    ]);
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=emitter.js.map