import { connect } from "react-redux";

import ApiService from "utils/api.service";

import storage from "utils/storage";

const mapState = (state) => {
  return {
    userList: state.get("profile")
  };
}

const mapDispatch = (dispatch) => {
  return {
    async loadUsersInfo() {
      let result = await ApiService.customRequest("/api/profile/users");
      storage.set("userlist", result.UserList);
      dispatch({
        type: "getUsers",
        data: result.UserList
      });
    }
  }
}

export default connect(mapState, mapDispatch)