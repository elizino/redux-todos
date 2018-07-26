import React, {Component} from 'react';
import { connect } from 'react-redux';
import { UPDATE_TODO } from '../constants';
import { updateTodos } from '../actions';
import { saveTodo } from '../reducers/todoReducer';

class InputTodos extends Component {
  
  handleInputChange = (evt) => {
    const val = evt.target.value
    this.props.updateTodos(val)
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.saveTodo(this.props.currentTodo)
  }

  render() {
    const {currentTodo} = this.props
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          onChange={this.handleInputChange}
          value={currentTodo}/>
      </form>
    )
  }
}

export default connect((state) => ({currentTodo: state.todo.currentTodo}), {updateTodos, saveTodo}
)(InputTodos)
