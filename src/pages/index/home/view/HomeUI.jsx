import React from 'react'

export default (props) => {
    return (
        <div>
            <div className="home-tabbar">
                {props.tabList.map((value, index) => {
                    return (
                        <div className="home-member" key={value.key}>
                            <div className="icon-box"></div>
                            <span>{value.title}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}