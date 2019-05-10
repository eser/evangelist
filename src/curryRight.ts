function curryRight(func: (...args: Array<any>) => any, ...args: Array<any>): (...args: Array<any>) => any {
    return (...args2: Array<any>) => func(...args2, ...args);
}

export {
    curryRight as default,
};
