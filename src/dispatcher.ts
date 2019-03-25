type MutatorType = (state: any, next: MutatorType) => any | Promise<any>;
type SubscriberType = (entry: any) => void;

async function dispatcher(state: any, mutators: Array<MutatorType>, subscribers?: Array<SubscriberType>): Promise<any> {
    const hasSubscribers = (subscribers !== undefined);
    let index = 0;

    const next = async (newState) => {
        const layer = mutators[index];

        if (layer === undefined) {
            return newState;
        }

        index += 1;

        return await layer(
            newState,
            async (currentState) => {
                if (hasSubscribers) {
                    // @ts-ignore
                    (<any>subscribers).forEach(subscriber => {
                        subscriber({ action: layer.name, previousState: newState, newState: currentState });
                    });
                }

                return await next(currentState);
            }
        );
    };

    return await next(state);
}

export {
    MutatorType,
    SubscriberType,
    dispatcher as default,
};
