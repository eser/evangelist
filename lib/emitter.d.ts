declare type EventType = (...args: Array<any>) => void;
declare type EventsTableType = {
    [key: string]: Array<EventType>;
};
declare type SubscriberType = (entry: any) => void;
declare function emitter(events: EventsTableType, eventName: string, args?: Array<any>, subscribers?: Array<SubscriberType>): Promise<void>;
export { EventType, EventsTableType, SubscriberType, emitter as default, };
