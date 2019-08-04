"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function dispatcher(state, mutators, subscribers) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var hasSubscribers, index, next;
        var _this = this;
        return tslib_1.__generator(this, function (_a) {
            hasSubscribers = (subscribers !== undefined);
            index = 0;
            next = function (newState) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var layer;
                var _this = this;
                return tslib_1.__generator(this, function (_a) {
                    layer = mutators[index];
                    if (layer === undefined) {
                        return [2, newState];
                    }
                    index += 1;
                    return [2, layer(newState, function (currentState) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            return tslib_1.__generator(this, function (_a) {
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
exports.default = dispatcher;
//# sourceMappingURL=dispatcher.js.map