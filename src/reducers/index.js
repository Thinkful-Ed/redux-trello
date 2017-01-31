import * as actions from '../actions';

const initialState = {
    lists: [{
        title: 'Example list 1',
        cards: [{
            text: 'Example card 1'
        }, {
            text: 'Example card 2'
        }]
    }, {
        title: 'Example list 2',
        cards: [{
            text: 'Example card 1'
        }, {
            text: 'Example card 2'
        }]
    }]
};

export const trelloReducer = (state=initialState, action) => {
    if (action.type === actions.ADD_LIST) {
        return Object.assign({}, state, {
            lists: [...state.lists, {
                title: action.title,
                cards: []
            }]
        });
    }
    else if (action.type === actions.ADD_CARD) {
        let lists = state.lists.map((list, index) => {
            if (index !== action.listIndex) {
                return list;
            }
            return Object.assign({}, list, {
                cards: [...list.cards, {
                    text: action.text
                }]
            });
        });

        return Object.assign({}, state, {
            lists
        });
    }
    return state;
};

