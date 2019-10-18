import { connect } from "react-redux";

import ApiService from "utils/api.service";

import storage from "utils/storage";

const mapState = (state) => {
    return {
        taGiftChosed: state.getIn(["gift", "taGiftChosed"])
    }
}

const mapDispatch = (dispatch) => {
    return {
        async taDetailGiftMsg() {
            let result = await ApiService.customRequest('/tawish')
            storage.set('taGiftChosed', result)
            dispatch({
                type: 'getTaChosedMsg',
                data: result
            })
        },

        getTaGiftList() {
            dispatch({
                type: 'getTaChosedMsg',
                data: storage.get('taGiftChosed')
            })    
        }
    }
}

export default connect(mapState, mapDispatch)