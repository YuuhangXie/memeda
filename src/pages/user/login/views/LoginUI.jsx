import React from 'react'
import LoginContainer from './StyledLogin'
import LoginForm from './components/LoginForm'


export default props => {
  return (
    <LoginContainer>
      <div className="login-wrap">
        <div className="login-title">
          <h1>么么哒</h1>
          <p className="login-love">一生一爱，热吻如初</p>
          <p className="login-text">情侣恋爱神器</p>
        </div>
        
        <LoginForm></LoginForm>

      </div>

    </LoginContainer>
  )
}