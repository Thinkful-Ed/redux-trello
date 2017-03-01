import {createStore} from 'redux'

import {trelloReducer} from './reducers';

export default createStore(trelloReducer);

