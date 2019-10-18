import { connect } from "react-redux";

import ApiService from "utils/api.service";

import storage from "utils/storage";

const mapState = (state) => {
    return {
        giftChosed: state.getIn(["gift", "giftChosed"]),
        myGiftChosed: state.getIn(["gift", "myGiftChosed"])
    }
}

const mapDispatch = (dispatch) => {
    return {
        async detailGiftMsg() {
            let result = await ApiService.customRequest('/ourwish')
            storage.set('giftChosed', result)
            dispatch({
                type: 'getChosedMsg',
                data: result
            })
        },

        async myDetailGiftMsg() {
            let result = await ApiService.customRequest('/mywish')
            storage.set('myGiftChosed', result)
            dispatch({
                type: 'getMyChosedMsg',
                data: result
            })    
        },

        async ourGiftListDispatch(data, id) {
            await ApiService.patch('/ourwish/' + id, data)
        },

        async myGiftListDispatch(data, id) {
            await ApiService.patch('/mywish/' + id, data)
        },

        async deleteOurWish(id) {
            await ApiService.delete('/ourwish/' + id)
        },

        async deleteMyWish(id) {
            await ApiService.delete('/mywish/' + id)
        },

        getGiftList() {
            dispatch({
                type: 'getChosedMsg',
                data: storage.get('giftChosed')
            })
        },

        getMyGiftList() {
            dispatch({
                type: 'getMyChosedMsg',
                data: storage.get('myGiftChosed')
            })    
        }
    }
}

export default connect(mapState, mapDispatch)