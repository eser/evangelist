declare function iterate(iterable: Iterable<any> | Promise<Iterable<any>>, func: (...args: Array<any>) => Promise<any> | any): Promise<void>;
export { iterate as default, };
