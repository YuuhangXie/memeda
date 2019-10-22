import React, { Component } from "react";

import { 
    AddLineContainer,
    LeftBoxContainer,
    TopBoxContainer 
} from './StyledAdd'

import storage from 'utils/storage.js'

class AddUI extends Component {

    render() {
        return(
            <div className="add-container">
                <div className="header-container">
                    <div className="back" onClick={() => this.props.showBox() }>
                        <img src="http://pz394k5aw.bkt.clouddn.com/%E5%90%91%E5%B7%A6%E7%9C%8B@3x.png" alt="back"/>
                    </div>
                    <span>照片描述</span>
                    <span onClick={() => this.props.updateUserMsg(this.refs.describe.value,storage.get('newImgList'))}>完成</span>
                </div>    
                <div className="add-body">
                    <AddLineContainer>
                        <textarea ref="describe" name="decreation" cols="30" rows="10" placeholder="留给未来更多的感动..."></textarea>
                    </AddLineContainer>
                    <div className="img-box">
                        {this.props.imgList.map( (value, index) => {
                            return(
                                <div key={index} className="add-img-container">
                                    <img src={value} alt="addImg"/>
                                </div>
                            )
                        } )}
                    </div>
                </div>
                <div className={this.props.determine ? "determine-container" : "hide-box"}>
                    <div className="box">
                        <TopBoxContainer>
                            <div className="top-box">
                                <span>放弃上传照片？</span>
                            </div>
                        </TopBoxContainer>
                        <div className="bottom-box">
                            <LeftBoxContainer>
                                <div className="cancle" onClick={() => this.props.showBox()}>取消</div>
                            </LeftBoxContainer>
                            <div className="determine" onClick={() => this.props.pathHandler('/memeda/album/index')}>确定</div>
                        </div>
                    </div>    
                </div>
            </div>
        )
    }
    
}

export default AddUI