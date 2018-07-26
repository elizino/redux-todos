import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import todoReducer from './reducers/todoReducer'
import messageReducer from './reducers/requestMessage'

const reducer = combineReducers({
  todo: todoReducer,
  message: messageReducer
})

export default createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)
