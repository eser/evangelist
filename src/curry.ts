function curry(func: (...args: Array<any>) => any, ...args: Array<any>): (...args: Array<any>) => any {
    return (...args2: Array<any>) => func(...args, ...args2);
}

export {
    curry as default,
};
