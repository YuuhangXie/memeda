import React from 'react'

import { findDOMNode }  from 'react-dom'

import { PullToRefresh } from 'antd-mobile';

import Views from './Views'

class Refresh extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshing: false,
      down: false,
      height: document.documentElement.clientHeight,
      data: props.list,
    };
  }

  componentDidMount() {
    const hei = this.state.height - findDOMNode(this.ptr).offsetTop - 49
    this.setState({
      height: hei,
      pageIndex: 2,
      // data: this.props.list
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
        {this.state.data.length !== 0 && this.state.data.map((item, index) => (
          <Views viewData={item} key={item.showId + Math.random()}></Views>
        ))}
      </PullToRefresh>
    </div>);
  }
}

export default Refresh