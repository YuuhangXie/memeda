import React from 'react'


export default (props) => {
    return (
        <div>
            <div className="home-title">
                <div className="femaleAva avatar">
                    <div className="avatar-box">
                        <img style={{borderRadius: '50%'}} src={props.userInfo.head_img} alt="头像"/>
                    </div>
                    <span>{props.userInfo.nickname}</span>
                </div>
                <div className="homeDate">
                    <span>我们已相爱</span>
                    <span>1天</span>
                </div>
                <div className="maleAva avatar">
                    <div className="avatar-box">
                        <img  src={props.userInfo.bind_info.head_img} alt="头像"/>
                    </div>
                    <span>{props.userInfo.bind_info.nickname}</span>
                </div>
            </div>
        </div>
    )
}