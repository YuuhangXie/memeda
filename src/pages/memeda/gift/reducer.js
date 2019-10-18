import { Map, List } from 'immutable'

const defaultState = Map({
    giftChosed: List([]),
    myGiftChosed: List([]),
    taGiftChosed: List([])
})

export default (state = defaultState, action) => {
    
    if(action.type === 'getChosedMsg') {
        return state.set('giftChosed', List(action.data))
    }   
    else if(action.type === 'getMyChosedMsg') {
        return state.set('myGiftChosed', List(action.data))
    }
    else if(action.type === 'getTaChosedMsg') {
        return state.set('taGiftChosed', List(action.data))
    }
    else    return state
}