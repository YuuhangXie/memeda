import React, { Component } from 'react'
import ApiService from 'utils/api.service'

export default class indexControllor extends Component {
  async componentDidMount() {
    let data = await ApiService.get(
      '/api/swiper',
      {
        params: {
          id: 12345
        }
      }
    )
    console.log(data)
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
