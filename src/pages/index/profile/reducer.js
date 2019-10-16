import { Map } from "immutable";

const defaultState = Map({
  userInfo: null
});

export default (state = defaultState, action) => {
  if(action.type === "getUsers") {
    return state.set("userInfo", action.data);
  }
  else {
    return state;
  }
}