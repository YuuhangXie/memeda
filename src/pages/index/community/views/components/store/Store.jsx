import React, { Component } from 'react'

import ApiService from 'utils/api.service'

export default class Store extends Component {
  constructor(props) {
    super(props)
    this.form = React.createRef()
  }
  handleChange = async (e) => {
    let data = new FormData()
    data.append('img_name', 'xie')
    data.append('img', e.target.files[0])
    let res = await ApiService.customRequest({
      method: 'post',
      headers: {
        'content-type': 'multipart/form-data'
      },
      url: '/pic/photo/save',
      data
    })
    console.log(res)
  }

  render() {
    return (
      <div>
        <form encType="multipart/form-data" id='form' ref={this.form}>
          <input type="file" id="img" name="img"  onChange={(e) => this.handleChange(e)} />
        </form>
      </div>
    )
  }
}
