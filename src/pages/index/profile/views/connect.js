import { connect } from "react-redux";

import ApiService from "utils/api.service";

import storage from "utils/storage";

const mapState = (state) => {
  return {
    userList: state.getIn(["profile", "userlist"])
  };
}

const mapDispatch = (dispatch) => {
  return {
    async loadUsersInfo() {
      let result = await ApiService.customRequest("/api/profile/users");    //实际请求时应该使用post方法，参数为用户id
      storage.set("userlist", result.UserList);
      dispatch({
        type: "getUsers",
        data: result.UserList
      });
    },
    getUsersInfoFromStorage() {
      dispatch({
        type: "getUsers",
        data: storage.get("userlist")
      });
    }
  }
}

export default connect(mapState, mapDispatch)