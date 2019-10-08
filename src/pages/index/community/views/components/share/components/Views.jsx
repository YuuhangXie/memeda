import React from 'react'

import {
  BorderViews,
  ViewsContainer
} from './StyledShare'

import female from 'images/community/female.png'
import male from 'images/community/male.png'
import zan from 'images/community/zan.png'
// import zanActive from 'images/community/zan-active.png'
import comment from 'images/community/comment.png'
function Views (props) {
  let {viewData} = props
  return (
    <BorderViews>
      <ViewsContainer>
        <div className="info">
          <img src={viewData.user.img_url} alt=""/>
          <div className="name">{viewData.user.kickName}</div>
          <div className={viewData.user.sex === '女' ? 'gender female' : 'gender male'}>
            <img src={viewData.user.sex === '女' ? female : male} alt=""/>
            <span>{viewData.user.age}</span>
          </div>
        </div>
        <div className="content">
          <span>@{viewData['@user']}</span>
          {viewData.showText}
        </div>
        {viewData.images.length !== 0 && <div className="images">
          {
            viewData.images.map((item, index) => (
              <img src={item} alt="" key={index}/>
            ))
          }
        </div>}
        <div className="func">
          <div className="time">
            1分钟前
          </div>
          <div className="comment">
            <div className="zan">
              <img src={zan} alt=""/>
              1
            </div>
            <div className="pl">
              <img src={comment} alt=""/>
              4
            </div>
          </div>
        </div>
      </ViewsContainer>
    </BorderViews>
  )
}

export default Views