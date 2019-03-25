type EventType = (...args: Array<any>) => void;
type EventsTableType = { [key: string]: Array<EventType> };
type SubscriberType = (entry: any) => void;

async function emitter(events: EventsTableType, eventName: string, args?: Array<any>, subscribers?: Array<SubscriberType>): Promise<void> {
    const hasSubscribers = (subscribers !== undefined);
    const isEventWildcard = (eventName === '*');
    const argsPass = (args !== undefined) ? args : [];

    for (const eventKey in events) {
        if (!isEventWildcard && eventName !== eventKey) {
            continue;
        }

        for (const eventSubscriber of events[eventKey]) {
            if (hasSubscribers) {
                // @ts-ignore
                (<any>subscribers).forEach(subscriber => {
                    subscriber({ event: eventKey, subscriber: eventSubscriber.name, args: args });
                });
            }

            await eventSubscriber(...argsPass);
        }
    }
}

export {
    EventType,
    EventsTableType,
    SubscriberType,
    emitter as default,
};
