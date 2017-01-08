export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (!serializedState) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) {
        console.log('unable to store state in local storage', error);
    }
};
