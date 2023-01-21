import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {userName: '', userPassword: ''}

  gettingUserName = event => {
    this.setState({userName: event.target.value})
  }

  gettingUserPassword = event => {
    this.setState({userPassword: event.target.value})
  }

  makingApiCall = async () => {
    const {userName, userPassword} = this.state
    const userDetails = {username: userName, password: userPassword}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (data.jwt_token !== undefined) {
      const {history} = this.props
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('./jobs')
    } else {
      this.setState({userName: '', userPassword: ''})
      const container = document.getElementById('container')
      const error = document.createElement('p')
      error.textContent = 'Enter Valid Login Details'
      error.classList.add('error')
      container.appendChild(error)
      ;<Redirect to="/" />
    }
  }

  render() {
    const {userName, userPassword} = this.state
    return (
      <div className="login_form_container">
        <h1 className="user_login_heading">User Login</h1>
        <div id="container" className="container">
          <label htmlFor="userName" className="label">
            User Name
          </label>
          <input
            id="userName"
            placeholder="Enter Your Name"
            type="text"
            value={userName}
            onChange={this.gettingUserName}
            className="inputs"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password"
            placeholder="Enter Password"
            type="password"
            value={userPassword}
            onChange={this.gettingUserPassword}
            className="inputs"
          />
          <button
            className="login_button"
            type="button"
            onClick={this.makingApiCall}
          >
            Login
          </button>
        </div>
      </div>
    )
  }
}

export default LoginForm
