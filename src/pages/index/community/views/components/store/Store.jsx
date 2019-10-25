import React, { Component } from 'react'

import ApiService from 'utils/api.service'

import StoreUI from "./StoreUI";

export default class Store extends Component {
  state = {
    productList: [],
    page: 1,
    finished: false
  }
  render() {
    return (
      <StoreUI
        productList={this.state.productList}
        pullUp={this.handlePullUpLoad.bind(this)}
        finished={this.state.finished}
      >
      </StoreUI>
    )
  }

  async componentDidMount() {
    let result = await ApiService.customRequest(`/community/productList/${this.state.page}`);
    this.setState((prevState) => {
      return {
        productList: result.data,
        page: prevState.page + 1
      }
    });
    if(!result.more) {
      this.setState({
        finished: true
      });
    }
  }

  async handlePullUpLoad() {
    if(!this.state.finished) {
      let result = await ApiService.customRequest(`/community/productList/${this.state.page}`);
      this.setState((prevState) => {
        return {
          productList: prevState.productList.concat(result.data),
          page: prevState.page + 1
        }
      });
      if(!result.more) {
        this.setState({
          finished: true
        });
      }
    }
  }
}
