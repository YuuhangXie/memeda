import React from "react";

import _ from 'lodash'

import Back from 'images/gift/back.png'
import Choose from 'images/gift/choose.png'
import Delete from 'images/gift/delete.png'

import Determine from '../determine/Determine'

function ourWishUI(props) {
    return(
        <div className="gift-container">
                <div className="header-container">
                    <div className="back"  onClick={() => props.ourList.hideBtnShow ? props.hideBtn() : props.loadRouter('/memeda/gift/index')}>
                        <img src={Back} alt="返回"/>
                    </div>
                    <span className="title">{props.ourList.search === 'our' ? '我们的愿望' : '我的愿望'}</span>
                    <div 
                        className={props.ourList.hideBtnShow ? "hideAva" : "addTip"} 
                        onClick={() => props.loadRouter('/memeda/gift/add?our')}
                    >
                        <div className="vertical-box"></div>
                        <div className="transverse-box"></div>
                    </div>
                    <div className={props.ourList.hideBtnShow ? "delete-bar" : "hideAva"}>
                        <span className="keep-delete" onClick={() => props.hideBtn() }>保存</span>
                        <span className="delete-chosed" onClick={() => props.deleteList()}>
                            <img src={Delete} alt="删除"/>
                        </span>
                    </div>
                </div>
                <div className="our-wish-container">
                    <ul className="ourwish-box">
                        {props.giftList.map(( value, index ) => {
                            return(
                                <li 
                                    key={value.id} 
                                    onTouchStart={() => props.touchStart()} 
                                    onTouchMove={(e) => props.touchMove(e)} 
                                    onTouchEnd={() => props.touchEnd()}
                                >
                                    <span 
                                        className={props.ourList.hideBtnShow ? (_.indexOf(props.ourList.deleteMenu, index) === -1 ? "delete-btn" : "delete-btn active") : "hideAva"} 
                                        onClick={() => props.deleteHandler(index)}
                                    ></span>
                                    <span 
                                        className={props.ourList.hideBtnShow ? "mag-15" : ""}
                                    >{index + 1}.{value.content}</span>
                                    <div 
                                        className={props.ourList.hideBtnShow ? "hideAva" : "choose-box"} 
                                        onClick={ () => props.clickHandler(index)}
                                    >
                                        <span className={ !value.choose ? "not-chosed" : "be-chosed" }>
                                            <img src={Choose} alt="选择"/>
                                        </span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={props.ourList.determine ? '' : 'hideAva'}>
                    <Determine
                        determine={props.ourList.determine}
                        deleteList={props.deleteList}
                        determineDelete={props.determineDelete}
                    ></Determine>    
                </div>
            </div>
    )
}

export default ourWishUI