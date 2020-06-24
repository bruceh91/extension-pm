import * as ActionTypes from '../../../constants/ActionTypes';

const initialState = [{
  text: 'test test'
}];

const actionsMap = {
   ['UPDATE_TEXT'](state, action) {
    console.log(`action -- ${JSON.stringify(action)}`)
    console.log(`state -- ${JSON.stringify(state)}`)
    return [{
        text: action.text
      },...state];
    }
};

export default function tracking(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}