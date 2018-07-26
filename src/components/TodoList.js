import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getTodos, toggleTodo, deleteTodo, visibleTodos} from '../reducers/todoReducer'

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => (
  <li>
    <span className='delete-item'>
      <button onClick={() => deleteTodo(id)}>X</button>
    </span>
    <input type="checkbox" checked={isComplete}
      onChange={() => toggleTodo(id)} />
    {name}
  </li>
)

class TodoList extends Component {
  componentDidMount() {
    this.props.getTodos()
  }

  render() {
    return (
      <div className="Todo-List">
        <ul>
          {this.props.todos.map(todo =>
            <TodoItem key={todo.id}
              toggleTodo={this.props.toggleTodo}
              deleteTodo={this.props.deleteTodo}
              {...todo} />)}
        </ul>
      </div>
    )
  }
}

export default connect( (state, ownProps) => ({todos: visibleTodos(state.todo.todos, ownProps.filter)}),
  {getTodos, toggleTodo, deleteTodo}
)(TodoList)
