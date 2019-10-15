import { connect } from "react-redux";

import ApiService from "utils/api.service";

import storage from "utils/storage";

const mapState = (state) => {
  return {
    userInfo: state.getIn(["profile", "userInfo"])
  };
}

const mapDispatch = (dispatch) => {
  return {
    async changeUsersInfo(id, data) {
      let userInfo = {
        ...storage.get("userInfo"),
        ...data
      };
      await ApiService.patch("/userlist/" + id, data);
      storage.set("userInfo", userInfo);
      dispatch({
        type: "getUsers",
        data: userInfo
      });
    },
    getUsersInfoFromStorage() {
      dispatch({
        type: "getUsers",
        data: storage.get("userInfo")
      });
    }
  };
}

export default connect(mapState, mapDispatch)