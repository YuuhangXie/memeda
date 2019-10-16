import { Map, List } from 'immutable'

const defaultState = Map({
    giftChosed: List([])
})

export default (state = defaultState, action) => {
    
    if(action.type === 'getChosedMsg') {
        return state.set('giftChosed', List(action.data))
    }   else {
        return state
    }
}