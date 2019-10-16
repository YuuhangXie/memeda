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
      let res1 = await ApiService.patch("/userlist/" + id, data);
      let res2 = await ApiService.get("/userlist/" + res1.bind_info.id);
      await ApiService.patch("/userlist/" + res2.id, {
        bind_info: {
          ...res2.bind_info,
          ...data
        }
      });
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