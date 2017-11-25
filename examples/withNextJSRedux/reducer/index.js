import { combineReducers } from 'redux';
import home from '../containers/Home/reducer';

export default function createReducer() {
  return combineReducers({
    home
  });
}
