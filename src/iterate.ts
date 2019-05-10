async function iterate(iterable: Iterable<any> | Promise<Iterable<any>>,
    func: (...args: Array<any>) => Promise<any> | any): Promise<void> {
    // eslint-disable-next-line no-restricted-syntax
    for (const value of await iterable) {
        // eslint-disable-next-line no-await-in-loop
        await func(value);
    }
}

export {
    iterate as default,
};
