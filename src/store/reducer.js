import { combineReducers } from 'redux-immutable'

import { reducer as index } from 'pages/index/'
import { reducer as profile } from "pages/index/profile/"   //用户信息的存储

export default combineReducers({
  index,
  profile
})