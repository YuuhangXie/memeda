import React from 'react';
import { Route, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import storage from 'utils/storage.js'

//私有路由，只有登录的用户才能访问
class PrivateRoute extends React.Component {

  componentWillMount() {
    let isAuthenticated = storage.get('isSignin') === true ? true : true;
    this.setState({
        isAuthenticated: isAuthenticated
      })
    if (!isAuthenticated) {
      const { history } = this.props
      history.replace("/login")
    }
  }

  render() {
    let { component: Component, path = "/", exact = false, strict = false } = this.props
    return this.state.isAuthenticated ? (
      <Route path={path} exact={exact} strict={strict} render={(props) => (<Component {...props} />)} />
    ) : '请重新登录'
  }
}

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  strict: PropTypes.bool,
  // component: PropTypes.func.isRequired
}

export default withRouter(PrivateRoute)