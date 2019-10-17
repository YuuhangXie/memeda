import React from "react";

import Back from 'images/gift/back.png'

function taWishUI(props) {
    return(
        <div className="gift-container">
            <div className="header-container">
                <div className="back"  onClick={() => props.loadRouter('/memeda/gift/index')}>
                    <img src={Back} alt="返回"/>
                </div>
                <span className="title">他的愿望</span>
            </div>
            <div className="our-wish-container">
                <ul className="ourwish-box">
                    {props.taWish.map(( value, index ) => {
                        return(
                            <li 
                                key={value.id} 
                            >
                                <span>{index + 1}.{value.content}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default taWishUI