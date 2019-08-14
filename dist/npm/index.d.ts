import compose from './compose';
import curry from './curry';
import curryRight from './curryRight';
import decorate from './decorate';
import dispatcher from './dispatcher';
import emitter from './emitter';
import iterate from './iterate';
declare const library: {
    compose: typeof compose;
    curry: typeof curry;
    curryRight: typeof curryRight;
    decorate: typeof decorate;
    dispatcher: typeof dispatcher;
    emitter: typeof emitter;
    iterate: typeof iterate;
};
export { library as default, compose, curry, curryRight, decorate, dispatcher, emitter, iterate, };
