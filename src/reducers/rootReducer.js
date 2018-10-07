import { combineReducers } from 'redux';
import easterEggsReducer from './easterEggsReducer.js';

export default combineReducers({
    easterEggs: easterEggsReducer
  })
  