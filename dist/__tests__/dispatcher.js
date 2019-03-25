"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var dispatcher_1 = tslib_1.__importDefault(require("../dispatcher"));
describe('dispatcher', function () {
    test('basic', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var initialState, actionAdd5, actionDiv2, result;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    initialState = { quarter: 1, year: 2018, sum: 1 };
                    actionAdd5 = function (state, next) { return next(tslib_1.__assign({}, state, { sum: state.sum + 5 })); };
                    actionDiv2 = function (state, next) { return next(tslib_1.__assign({}, state, { sum: state.sum / 2 })); };
                    return [4, dispatcher_1.default(initialState, [actionAdd5, actionDiv2])];
                case 1:
                    result = _a.sent();
                    expect(result).toEqual({ quarter: 1, year: 2018, sum: 3 });
                    return [2];
            }
        });
    }); });
    test('with subscriber', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var initialState, actionAdd5, actionDiv2, logs, logger, result;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    initialState = { quarter: 1, year: 2018, sum: 1 };
                    actionAdd5 = function (state, next) { return next(tslib_1.__assign({}, state, { sum: state.sum + 5 })); };
                    actionDiv2 = function (state, next) { return next(tslib_1.__assign({}, state, { sum: state.sum / 2 })); };
                    logs = [];
                    logger = function (x) { return logs.push(x); };
                    return [4, dispatcher_1.default(initialState, [actionAdd5, actionDiv2], [logger])];
                case 1:
                    result = _a.sent();
                    expect(result).toEqual({ quarter: 1, year: 2018, sum: 3 });
                    expect(logs).toEqual([
                        {
                            action: 'actionAdd5',
                            previousState: { quarter: 1, year: 2018, sum: 1 },
                            newState: { quarter: 1, year: 2018, sum: 6 },
                        },
                        {
                            action: 'actionDiv2',
                            previousState: { quarter: 1, year: 2018, sum: 6 },
                            newState: { quarter: 1, year: 2018, sum: 3 },
                        },
                    ]);
                    return [2];
            }
        });
    }); });
});
//# sourceMappingURL=dispatcher.js.map