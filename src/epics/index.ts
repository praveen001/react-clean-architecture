import { combineEpics, createEpicMiddleware } from 'redux-observable';
import todoEpics from './todoEpics';
import { IState } from '../reducers';
import { Action } from 'redux';

export const rootEpic = combineEpics(todoEpics);

export default createEpicMiddleware<Action, Action, IState>();