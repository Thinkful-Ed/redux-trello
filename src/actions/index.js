export const ADD_LIST = 'ADD_LIST';
export function addList(title) {
    return {
        type: ADD_LIST,
        title
    };
};

export const ADD_CARD = 'ADD_CARD';
export function addCard(text, listIndex) {
    return {
        type: ADD_CARD,
        text,
        listIndex
    };
};
