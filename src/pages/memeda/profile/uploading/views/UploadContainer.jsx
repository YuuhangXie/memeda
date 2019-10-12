import React, { Component } from 'react'

import UploadUI from "./UploadUI";

//导入Swiper
import Swiper from 'swiper/js/swiper';
import 'swiper/css/swiper.css';

export default class Upload extends Component {
  state = {
    showCarema: true,
    cover: false
  }
  render() {
    return (
      <UploadUI
        goBack={this.handleGoBack.bind(this)}
        camera={this.state.showCarema}
        clickCarema={this.handleClickCarema.bind(this)}
        cover={this.state.cover}
        clickCover={this.handleClickCover.bind(this)}
        cancel={this.handleCancel.bind(this)}
        upload={this.handleUpload.bind(this)}
      >
      </UploadUI>
    )
  }

  componentDidMount() {
    new Swiper('.swiper-container', {
      initialSlide: 1,
      loop: false,
      speed: 500,
      slidesPerView: 3,
      spaceBetween: -87,
      centeredSlides: true,
      watchSlidesProgress: true,
      slideToClickedSlide: true,
      updateOnImagesReady: true,
      on: {   //mySwiper.getTranslate()  mySwiper.setTranslate(mySwiper.getTranslate())     88 -12 -112 -212
        transitionStart: function() {
          this.setTranslate(88 - 100 * this.activeIndex);
        },
        setTranslate: function () {
          let slides = this.slides
          for (let i = 0; i < slides.length; i++) {
            let slide = slides.eq(i)
            let progress = slides[i].progress;
            slide.css({ 'opacity': '', 'background': '' }); slide.transform('');//清除样式

            slide.transform('scale(' + (1 - Math.abs(progress) / 8) + ')');
          }
        },
        setTransition: function (transition) {
          for (let i = 0; i < this.slides.length; i++) {
            let slide = this.slides.eq(i)
            slide.transition(transition);
          }
        }
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: false
      }
    });
  }

  handleGoBack() {
    this.props.history.goBack();
  }

  handleClickCarema() {
    this.setState({
      showCarema: false,
      cover: true
    });
  }

  handleClickCover() {
    this.setState({
      showCarema: true,
      cover: false
    });
  }

  handleCancel() {
    alert("取消");
  }

  handleUpload() {
    alert("上传");
  }
}
