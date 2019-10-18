import { Map } from 'immutable'

const defaultState = Map({
    diaryIndex: Map({})
})

export default (state = defaultState, action) => {
    if(action.type === 'getdiaryIndex') {
        return state.set('diaryIndex', Map(action.data))
    }
    else    return state
}