import { combineReducers } from 'redux-immutable'

import { reducer as index } from 'pages/index/'
import { reducer as profile } from "pages/index/profile/"   //用户信息的存储
import { reducer as gift } from 'pages/memeda/gift/'        //“我的愿望”模块信息
import { reducer as diary} from 'pages/memeda/diary/'

export default combineReducers({
  index,
  profile,
  gift,
  diary
})