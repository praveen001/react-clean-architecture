import { combineReducers } from 'redux';
import todosReducer, { ITodoState, initialTodoState } from './todosReducer';

export interface IState {
  todos: ITodoState;
}

export const initialState: IState = {
  todos: initialTodoState
};

export default combineReducers({
  todos: todosReducer
});