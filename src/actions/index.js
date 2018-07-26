import { LOAD_TODOS, ADD_TODO, UPDATE_TODO, REPLACE_TODO, TODO_REMOVE, SHOW_MESSAGE } from '../constants';

export const loadTodos = (todo) => ({ type: LOAD_TODOS, payload: todo });
export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const updateTodos = (todo) => ({ type: UPDATE_TODO, payload: todo });
export const replaceTodo = (todo) => ({ type: REPLACE_TODO, payload: todo });
export const removeTodo = (id) => ({ type: TODO_REMOVE, payload: id });
export const getMessage = (msg) => ({ type: SHOW_MESSAGE, payload: msg });
