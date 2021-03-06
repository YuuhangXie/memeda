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
    async loadUsersInfo(id) {
      let result = await ApiService.customRequest("/userlist?id=" + id);    //实际请求时应该使用post方法，参数为用户id
      storage.set("userInfo", result[0]);
      dispatch({
        type: "getUsers",
        data: result[0]
      });
    },
    getUsersInfoFromStorage() {
      dispatch({
        type: "getUsers",
        data: storage.get("userInfo")
      });
    }
  }
}

export default connect(mapState, mapDispatch)