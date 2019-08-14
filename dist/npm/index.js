"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var compose_1 = tslib_1.__importDefault(require("./compose"));
exports.compose = compose_1.default;
var curry_1 = tslib_1.__importDefault(require("./curry"));
exports.curry = curry_1.default;
var curryRight_1 = tslib_1.__importDefault(require("./curryRight"));
exports.curryRight = curryRight_1.default;
var decorate_1 = tslib_1.__importDefault(require("./decorate"));
exports.decorate = decorate_1.default;
var dispatcher_1 = tslib_1.__importDefault(require("./dispatcher"));
exports.dispatcher = dispatcher_1.default;
var emitter_1 = tslib_1.__importDefault(require("./emitter"));
exports.emitter = emitter_1.default;
var iterate_1 = tslib_1.__importDefault(require("./iterate"));
exports.iterate = iterate_1.default;
var library = {
    compose: compose_1.default,
    curry: curry_1.default,
    curryRight: curryRight_1.default,
    decorate: decorate_1.default,
    dispatcher: dispatcher_1.default,
    emitter: emitter_1.default,
    iterate: iterate_1.default,
};
exports.default = library;
//# sourceMappingURL=index.js.map