import { fetchTodos, createTodo, changeTodo, eraseTodo } from '../services/apiServices';
import { ADD_TODO, LOAD_TODOS, UPDATE_TODO, REPLACE_TODO, TODO_REMOVE } from '../constants';
import { getMessage, loadTodos, addTodo, replaceTodo, removeTodo } from '../actions';

export const toggleTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(getMessage('Saving...'))
    const {todos} = getState().todo
    const todo = todos.find(t => t.id === id)
    const toggled = {...todo, isComplete: !todo.isComplete}
    changeTodo(toggled).then(res => dispatch(replaceTodo(res)))
  }
}

export const visibleTodos = (todos, filter) => {
  switch(filter) {
    case 'active':
      return todos.filter(t => !t.isComplete)
    case 'completed':
      return todos.filter(t => t.isComplete)
    default:
      return todos
  }
}

export const getTodos = () => {
  return (dispatch) => {
    dispatch(getMessage('Loading...'))
    fetchTodos().then(todos => dispatch(loadTodos(todos)))
  }
}

export const saveTodo = (name) => {
  return (dispatch) => {
    dispatch(getMessage('Saving...'))
    createTodo(name).then(res => dispatch(addTodo(res)))
  }
}

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch(getMessage('Removing...'))
    eraseTodo(id).then(() => dispatch(removeTodo(id)))
  }
}

const initState = {
  todos: [],
  currentTodo: ''
}

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state, currentTodo: '', todos: state.todos.concat(action.payload)}
    case LOAD_TODOS:
      return {...state, todos: action.payload}
    case UPDATE_TODO:
      return {...state, currentTodo: action.payload}
    case REPLACE_TODO:
      return {...state,
        todos: state.todos
          .map(t => t.id === action.payload.id ? action.payload : t)
      }
    case TODO_REMOVE:
      return {...state,
        todos: state.todos.filter(t => t.id !== action.payload)
      }
    default:
      return state
  }
}
