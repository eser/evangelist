declare type ComposableFunction = (...args: Array<any>) => any;
declare function compose(...funcs: Array<ComposableFunction>): ComposableFunction;
export { compose as default, };
