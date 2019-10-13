import { Map, List } from "immutable";

const defaultState = Map({
  userlist: List([])
});

export default (state = defaultState, action) => {
  if(action.type === "getUsers") {
    return state.set("userlist", List(action.data));
  }
  else {
    return state;
  }
}