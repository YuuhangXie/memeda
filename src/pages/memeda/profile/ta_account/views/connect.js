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
    async removeRelationship(id) {
      let userInfo = storage.get("userInfo");
      let ta_id = userInfo.bind_info.id;
      let _info = {
        bind_status: false,
        fund_status: false,
        bind_info: {
          id: "",
          sex: "",
          nickname: "",
          head_img: "",
          age: "",
          lover_code: ""
        }
      };
      storage.set("userInfo", {
        ...userInfo,
        ..._info
      });
      await ApiService.patch("/userlist/" + id, _info);
      await ApiService.patch("/userlist/" + ta_id, _info);
    }
  };
}

export default connect(mapState, mapDispatch)