declare type ComposableFunction = (...args: Array<any>) => any;
declare function compose(...funcs: Array<ComposableFunction>): ComposableFunction;

declare function curry(func: (...args: Array<any>) => any, ...args: Array<any>): (...args: Array<any>) => any;

declare function curryRight(func: (...args: Array<any>) => any, ...args: Array<any>): (...args: Array<any>) => any;

declare function decorate(target: Function, decorator: Function): (...args: any[]) => any;

declare type MutatorType = (state: any, next: MutatorType) => any | Promise<any>;
declare type SubscriberType = (entry: any) => void;
declare function dispatcher(state: any, mutators: Array<MutatorType>, subscribers?: Array<SubscriberType>): Promise<any>;

declare type EventType = (...args: Array<any>) => void;
declare type EventsTableType = {
    [key: string]: Array<EventType>;
};
declare type SubscriberType$1 = (entry: any) => void;
declare function emitter(events: EventsTableType, eventName: string, args?: Array<any>, subscribers?: Array<SubscriberType$1>): Promise<void>;

declare function iterate(iterable: Iterable<any> | Promise<Iterable<any>>, func: (...args: Array<any>) => Promise<any> | any): Promise<void>;

declare const library: {
    compose: typeof compose;
    curry: typeof curry;
    curryRight: typeof curryRight;
    decorate: typeof decorate;
    dispatcher: typeof dispatcher;
    emitter: typeof emitter;
    iterate: typeof iterate;
};

export default library;
export { compose, curry, curryRight, decorate, dispatcher, emitter, iterate };
