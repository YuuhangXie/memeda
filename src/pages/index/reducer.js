import { Map } from 'immutable'

const defaultState = Map({
  list: 'abc',
  msg: '123'
})

export default (state=defaultState, action) => {
  switch(action.type) {
    case 'test':
      return state.set('list', action.data)
    case 'asynctest':
      return state.set('msg', action.data)
    default:
      return state
  }
}