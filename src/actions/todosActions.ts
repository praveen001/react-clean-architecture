import { ITodoItem } from "../models";

export enum TodosActionTypes {
  LOAD_TODOS = 'todos/load',
  LOADING_TODOS = 'todos/loading',
  LOADED_TODOS = 'todos/loaded',
  LOADING_TODOS_FAILED = 'todos/loading_failed',

  ADD_TODO = 'todos/add',
  ADDING_TODO = 'todos/adding',
  ADDED_TODOS = 'todos/added',
  ADDING_TODOS_FAILED = 'todos/adding_failed'
}

export function loadTodos(): ILoadTodosAction {
  return {
    type: TodosActionTypes.LOAD_TODOS
  }
}

export function loadingTodos(): ILoadingTodosAction {
  return {
    type: TodosActionTypes.LOADING_TODOS
  }
}

export function loadedTodos(todos: ITodoItem[]): ILoadedTodosAction {
  return {
    type: TodosActionTypes.LOADED_TODOS,
    payload: {
      todos
    }
  }
}

export function loadingTodosFailed(): ILoadingTodosFailedAction {
  return {
    type: TodosActionTypes.LOADING_TODOS_FAILED
  }
}

export function addTodo(description: string): IAddTodoAction {
  return {
    type: TodosActionTypes.ADD_TODO,
    payload: {
      description
    }
  }
}

export function addingTodo(): IAddingTodoAction {
  return {
    type: TodosActionTypes.ADDING_TODO
  }
}

export function addedTodo(todo: ITodoItem): IAddedTodoAction {
  return {
    type: TodosActionTypes.ADDED_TODOS,
    payload: {
      todo
    }
  }
}

export function addingTodoFailed(): IAddingTodoFailedAction {
  return {
    type: TodosActionTypes.ADDING_TODOS_FAILED
  }
}

export interface ILoadTodosAction {
  type: TodosActionTypes.LOAD_TODOS;
}

export interface ILoadingTodosAction {
  type: TodosActionTypes.LOADING_TODOS;
}

export interface ILoadedTodosAction {
  type: TodosActionTypes.LOADED_TODOS;
  payload: {
    todos: ITodoItem[];
  }
}

export interface ILoadingTodosFailedAction {
  type: TodosActionTypes.LOADING_TODOS_FAILED;
}

export interface IAddTodoAction {
  type: TodosActionTypes.ADD_TODO;
  payload: {
    description: string;
  }
}

export interface IAddingTodoAction {
  type: TodosActionTypes.ADDING_TODO;
}

export interface IAddedTodoAction {
  type: TodosActionTypes.ADDED_TODOS;
  payload: {
    todo: ITodoItem;
  }
}

export interface IAddingTodoFailedAction {
  type: TodosActionTypes.ADDING_TODOS_FAILED;
}

export type TodosAction = ILoadTodosAction | ILoadingTodosAction | ILoadedTodosAction | ILoadingTodosFailedAction | IAddTodoAction | IAddingTodoAction | IAddedTodoAction | IAddingTodoFailedAction;