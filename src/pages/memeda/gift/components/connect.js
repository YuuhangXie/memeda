import { connect } from "react-redux";

import ApiService from "utils/api.service";

import storage from "utils/storage";

const mapState = (state) => {
    return {
        giftChosed: state.getIn(["gift", "giftChosed"])
    }
}

const mapDispatch = (dispatch) => {
    return {
        async detailGiftMsg(search) {
            let result = await ApiService.customRequest('/api/gift/' + search + 'wish')
            storage.set('giftChosed', result.data.ourWish)
            dispatch({
                type: 'getChosedMsg',
                data: result.data.ourWish
            })
        },

        getGiftList() {
            dispatch({
                type: 'getChosedMsg',
                data: storage.get('giftChosed')
            })
        }
    }
}

export default connect(mapState, mapDispatch)