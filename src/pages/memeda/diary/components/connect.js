import { connect } from "react-redux";


const mapState = (state) => {
    return {
        diaryIndex: state.getIn(["diary", "diaryIndex"]),
    }
}

const mapDispatch = (dispatch) => {
    return {
        getDiaryIndex(index) {
            dispatch({
                type: 'getdiaryIndex',
                data: {
                    'diaryIndex': index
                }
            })
        }
    }
}

export default connect(mapState, mapDispatch)