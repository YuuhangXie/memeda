import React from 'react'


export default (props) => {
    return (
        <div>
            <div className="home-title">
                <div className="femaleAva avatar">
                    <div className="avatar-box">
                        <img src={props.avatar.female.avatarImg} alt="头像"/>
                    </div>
                    <span>{props.avatar.female.name}</span>
                </div>
                <div className="homeDate">
                    <span>我们已相爱</span>
                    <span>{props.date}天</span>
                </div>
                <div className="maleAva avatar">
                    <div className="avatar-box">
                        <img src={props.avatar.male.avatarImg} alt="头像"/>
                    </div>
                    <span>{props.avatar.male.name}</span>
                </div>
            </div>
        </div>
    )
}