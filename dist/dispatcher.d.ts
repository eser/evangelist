declare type MutatorType = (state: any, next: MutatorType) => any | Promise<any>;
declare type SubscriberType = (entry: any) => void;
declare function dispatcher(state: any, mutators: Array<MutatorType>, subscribers?: Array<SubscriberType>): Promise<any>;
export { dispatcher as default, };
