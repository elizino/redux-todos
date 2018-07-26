import { SHOW_MESSAGE, ADD_TODO, LOAD_TODOS, UPDATE_TODO, REPLACE_TODO, TODO_REMOVE } from '../constants';
import { getMessage } from '../actions';

export default function(state='', action) {
  switch(action.type) {
    case SHOW_MESSAGE:
      return action.payload;
    case ADD_TODO:
    case LOAD_TODOS:
    case REPLACE_TODO:
    case TODO_REMOVE:
      return '';
    default:
      return state;
  }
}
