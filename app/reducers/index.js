import { combineReducers } from 'redux';
import todos from '../components/todo/services/todoReducer';
import tracking from '../components/tracking/services/trackingReducer';

export default combineReducers({
  todos,
  tracking
});
