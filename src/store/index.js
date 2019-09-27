import { applyMiddleware, createStore } from 'redux'

// redux中间件处理异步请求
import thunk from 'redux-thunk'
import rootReducer from './reducer'

// immutable.js处理state数据结构
import Immutable from 'immutable'

const initialState = Immutable.Map()

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
)

export default store