import { connect } from 'react-redux'
import ApiService from 'utils/api.service'


const mapState = (state) => {
  return {
    list: state.getIn(['index', 'list']),  // 树结构 index list
    msg: state.getIn(['index', 'msg'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadData() {
      dispatch({
        type: 'test',
        data: 'synctest'
      })
    },
    async loadAsyncData() {
      let asyncdata = await ApiService.customRequest('/api/test')
      dispatch({
        type: 'asynctest',
        data: 'async' + asyncdata.msg
      })
    }
  }
}

export default connect(mapState, mapDispatch)