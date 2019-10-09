import { List } from "immutable";

const defaultState = List([]);

export default (state = defaultState, action) => {
  if(action.type === "getUsers") {
    return state.concat(List(action.data));
  }
  else {
    return state;
  }
}