type ComposableFunction = (...args: Array<any>) => any;

function compose(...funcs: Array<ComposableFunction>): ComposableFunction {
    return funcs.reduce(
        (previousFunction: ComposableFunction, currentFunction: ComposableFunction) =>
            // eslint-disable-next-line implicit-arrow-linebreak
            (...args: Array<any>): any =>
                // eslint-disable-next-line implicit-arrow-linebreak
                currentFunction(previousFunction(...args)),
    );
}

export {
    compose as default,
};
