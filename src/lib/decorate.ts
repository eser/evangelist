function decorate(target: Function, decorator: Function) {
    return function (...args: Array<any>): any {
        return decorator(...args, target);
    };
};

export {
    decorate as default,
};
