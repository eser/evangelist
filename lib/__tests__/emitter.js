"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var emitter_1 = tslib_1.__importDefault(require("../emitter"));
test('emitter', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
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
//# sourceMappingURL=emitter.js.map