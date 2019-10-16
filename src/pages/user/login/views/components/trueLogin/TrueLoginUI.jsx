import React from 'react'
import TrueLogin from './StyledTrueLogin'
import LoginForm from '../LoginForm'


export default props => {
  return (
    <TrueLogin>
      <div className="login-title">
        <h1>么么哒</h1>
        <p className="login-love">一生一爱，热吻如初</p>
        <p className="login-text">情侣恋爱神器</p>
      </div>

      <LoginForm></LoginForm>
      
    </TrueLogin>
  )
}