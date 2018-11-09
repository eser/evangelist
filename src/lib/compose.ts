function compose(...funcs: Array<(...args: Array<any>) => any>): any {
    return funcs.reduce(
        (previousValue, currentValue) => {
            return function (...args: Array<any>): any {
                return currentValue(previousValue(...args));
            }
        },
    );
}

export {
    compose as default,
};
