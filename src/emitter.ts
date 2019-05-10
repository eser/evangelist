type EventType = (...args: Array<any>) => void;
type EventsTableType = { [key: string]: Array<EventType> };
type SubscriberType = (entry: any) => void;

async function emitter(events: EventsTableType,
    eventName: string, args?: Array<any>, subscribers?: Array<SubscriberType>): Promise<void> {
    const isEventWildcard = (eventName === '*');
    const argsPass = (args !== undefined) ? args : [];

    // eslint-disable-next-line no-restricted-syntax
    for (const eventKey of Object.keys(events)) {
        if (!isEventWildcard && eventName !== eventKey) {
            continue;
        }

        // eslint-disable-next-line no-restricted-syntax
        for (const eventSubscriber of events[eventKey]) {
            if (subscribers !== undefined) {
                subscribers.forEach((subscriber) => {
                    subscriber({ event: eventKey, subscriber: eventSubscriber.name, args: args });
                });
            }

            // eslint-disable-next-line no-await-in-loop
            await eventSubscriber(...argsPass);
        }
    }
}

export {
    emitter as default,
};
