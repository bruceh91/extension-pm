import * as ActionTypes from '../../../constants/ActionTypes';

const initialState = {
  text: 'test test',
  blockedArray: ['www.youtube.com','www.reddit.com']
};

const actionsMap = {
   ['UPDATE_TEXT'](state, action) {
    console.log(`hit inside UPDATE_TEXT`)
    console.log(`action -- ${JSON.stringify(action)}`)
    alert(`state 1-- ${JSON.stringify(state)}`)
    state.text = action.text
    alert(`state 2-- ${JSON.stringify(state)}`)
      return state;
    },
    ['SET_BLOCKED_ARRAY'](state, action) {
      console.log(`hit inside SET_BLOCKED_ARRAY`)
      console.log(`action -- ${JSON.stringify(action)}`)
      console.log(`state 1-- ${JSON.stringify(state)}`)
      state.blockedArray = action.blockedArray
      console.log(`state 2-- ${JSON.stringify(state)}`)
      return state;
      }
};

export default function tracking(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}