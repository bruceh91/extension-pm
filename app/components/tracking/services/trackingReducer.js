import * as ActionTypes from '../../../constants/ActionTypes';

const initialState = [{
  text: 'test test',
  blockedArray: []
}];

const actionsMap = {
   ['UPDATE_TEXT'](state, action) {
    console.log(`hit inside UPDATE_TEXT`)
    console.log(`action -- ${JSON.stringify(action)}`)
    console.log(`state -- ${JSON.stringify(state)}`)
    state[0].text = action.text
      return state;
    },
    ['SET_BLOCKED_ARRAY'](state, action) {
      console.log(`hit inside SET_BLOCKED_ARRAY`)
      console.log(`action -- ${JSON.stringify(action)}`)
      console.log(`state -- ${JSON.stringify(state)}`)
      state[0].blockedArray = action.blockedArray
      return state;
      }
};

export default function tracking(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}