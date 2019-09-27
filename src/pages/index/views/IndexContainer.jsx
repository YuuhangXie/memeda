import React, { Component } from 'react'
import ApiService from 'utils/api.service'

import connect from './connect'

@connect
class Index extends Component {
  async componentDidMount() {
    let data = await ApiService.customRequest(
      '/api/test'
    )
    console.log(data)
    
    // redux
    this.props.loadData()
    this.props.loadAsyncData()
  }

  componentDidUpdate() {
    console.log(this.props)
  }

  render() {
    return (
      <div>
        {this.props.list} / {this.props.msg}
      </div>
    )
  }
}

export default Index