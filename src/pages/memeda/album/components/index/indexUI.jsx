import React from "react";

import PhotoModule from '../photoModule/photoModule'
import { AlbumLineContainer } from './StyledIndex'

function IndexUI(props) {
    return(
        <div className="album-container">
            <div className="header-container">
                <div className="back" onClick={() => props.routerHandler('/index') }>
                    <img src="http://pz394k5aw.bkt.clouddn.com/%E5%90%91%E5%B7%A6%E7%9C%8B@3x.png" alt="back"/>
                </div>
                <span>私密相册</span>
                <span onClick={(e) => props.additionHandler(e)}>管理</span>
            </div>
            <div className="album-body">
                <PhotoModule
                    routerHandler={props.routerHandler}
                ></PhotoModule>
            </div>
            <div className={props.hide ? 'coverPage' : 'hidePage'}>
                <div className="picture-container">
                    <div className="photo update-box">
                        <span className="photo-name">拍照</span>
                        <input type="file" accept="image/*" capture="camera" onChange={(e) => { props.setImage(e.target.files, e) }}></input>
                    </div>
                    <AlbumLineContainer>
                        <div className="album update-box">
                            <span className="photo-name">从相册选择</span>
                            <input type="file" accept="image/*" multiple onChange={(e) => { props.setImage(e.target.files, e) }}/>
                        </div>
                    </AlbumLineContainer>
                    <div className="delete update-box" onClick={(e) => props.additionHandler(e)}>取消</div>  
                </div>    
            </div>
        </div>
    )
}

export default IndexUI