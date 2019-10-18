import React from 'react'


export default (props) => {
    return (
        <div>
            <div className="home-title">
                <div className="femaleAva avatar">
                    <div className="avatar-box">
                        <img src={props.userInfo[1].head_img} alt="头像"/>
                    </div>
                    <span>{props.userInfo[1].nickname}</span>
                </div>
                <div className="homeDate">
                    <span>我们已相爱</span>
                    <span>{props.date}天</span>
                </div>
                <div className="maleAva avatar">
                    <div className="avatar-box">
                        <img src={props.userInfo[0].head_img} alt="头像"/>
                    </div>
                    <span>{props.userInfo[0].nickname}</span>
                </div>
            </div>
        </div>
    )
}