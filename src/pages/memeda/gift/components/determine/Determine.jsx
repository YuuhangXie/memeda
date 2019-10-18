import React, { Component } from 'react'

import {
    DetermineContainer,
    TopBoxContainer,
    LeftBoxContainer
} from './StyledDetermine'

class determineWindow extends Component {
    render() {
        return(
            <DetermineContainer>
                <div className={this.props.determine ? "determine-container" : "hide-box"}>
                    <div className="box">
                        <TopBoxContainer>
                            <div className="top-box">
                                <span>确定删除内容？</span>
                            </div>
                        </TopBoxContainer>
                        
                        <div className="bottom-box">
                            <LeftBoxContainer>
                                <div className="cancle" onClick={() => this.props.deleteList()}>取消</div>
                            </LeftBoxContainer>
                            <div className="determine" onClick={() => this.props.determineDelete()}>确定</div>
                        </div>
                    </div>    
                </div>
            </DetermineContainer>
        )
    }
}

export default determineWindow