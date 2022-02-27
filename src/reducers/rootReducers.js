// Packages
import { combineReducers } from 'redux';

// Reducers
import { eventListReducer, eventRetrieveReducer } from './eventReducer';


export const rootReducer = combineReducers({
    events: eventListReducer,
    event: eventRetrieveReducer
})
