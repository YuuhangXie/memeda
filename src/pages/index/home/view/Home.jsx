import React, { Component } from 'react'

import HomeUI from './HomeUI'

import Album from 'images/home/albumIcon.png'
import Anniversary from 'images/home/anniversaryIcon.png'
import Diary from 'images/home/diaryIcon.png'
import Period from 'images/home/periodIcon.png'
import Gift from 'images/home/giftIcon.png'

import {
  HomeContainer
} from './StyledHome'

const tabList = [
  {
    title: '相册',
    key: 'album',
    icon: Album
  },
  {
    title: '写日记',
    key: 'diary',
    icon: Diary
  },
  {
    title: '纪念日',
    key: 'anniversary',
    icon: Anniversary
  },
  {
    title: '小姨妈',
    key: 'period',
    icon: Period
  },
  {
    title: '愿望清单',
    key: 'gift',
    icon: Gift
  }
]

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <HomeUI
          tabList={tabList}
        ></HomeUI>
      </HomeContainer>
    )
  }
}
