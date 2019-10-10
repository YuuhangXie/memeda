import React from 'react'

import { findDOMNode }  from 'react-dom'

import { PullToRefresh } from 'antd-mobile'

import Views from './Views'

class Refresh extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
      down: true,
      height: document.documentElement.clientHeight,
    }
  }

  componentDidMount() {
    const hei = this.state.height - findDOMNode(this.ptr).offsetTop - 49
    this.setState({
      height: hei,
    })
  }

  render() {
    return (<div>
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto'
        }}
        indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
        direction={this.state.down ? 'down' : 'up'}
        refreshing={this.state.refreshing}
        onRefresh={async () => {
          this.setState({ refreshing: true })
            this.props.handleAddPage()
            setTimeout(() => {
              this.setState({ refreshing: false })
            }, 1000)
        }}
      >
        {this.props.list.length !== 0 && this.props.list.map((item, index) => (
          <Views viewData={item} key={item.showId + parseInt(Math.random() * 100000)}></Views>
        ))}
      </PullToRefresh>
    </div>);
  }
}

export default Refresh