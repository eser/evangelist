function decorate(target: Function, decorator: Function) {
    return function func(...args: Array<any>): any {
        return decorator(...args, target);
    };
}

export {
    decorate as default,
};
