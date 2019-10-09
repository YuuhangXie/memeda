import { connect } from "react-redux";

import ApiService from "utils/api.service";

const mapState = (state) => {
  return {
    userList: state.get("profile")
  };
}

const mapDispatch = (dispatch) => {
  return {
    async loadUsersInfo() {
      let result = await ApiService.customRequest("/api/profile/users");
      dispatch({
        type: "getUsers",
        data: result.UserList
      });
    }
  }
}

export default connect(mapState, mapDispatch)