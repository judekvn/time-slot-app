import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import timeSlots from './timeSlots';

export const reducers = combineReducers({ 
    form: formReducer,
    timeSlots
});
