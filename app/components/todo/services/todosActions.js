import * as types from '../../../constants/ActionTypes';

export function addTodo(text) {
  console.log('hit inside addTodo')
  console.log(`text --- ${text}`)
  return { type: 'ADD_TODO', text };
}

export function deleteTodo(id) {
  console.log('hit inside deleteTodo')
  return { type: 'DELETE_TODO', id };
}

export function editTodo(id, text) {
  console.log('hit inside editTodo')
  return { type: 'EDIT_TODO', id, text };
}

export function completeTodo(id) {
  console.log('hit inside completeTodo')
  return { type: 'COMPLETE_TODO', id };
}

export function completeAll() {
  console.log('hit inside completeAll')
  return { type: 'COMPLETE_ALL' };
}

export function clearCompleted() {
  console.log('hit inside clearCompleted')
  return { type: 'CLEAR_COMPLETED' };
}
