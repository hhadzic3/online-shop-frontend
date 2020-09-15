import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      full_name: 'Harun Hadzic',
      email: 'hhh@hhh.com',
      errors: {}
    }
  }

  componentDidMount() {
    /*const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      full_name: decoded.full_name,
      email: decoded.email
    })*/
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">PROFILE</h1>
          
          <table className="table">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{this.state.full_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        
      </div>
    )
  }
}

export default Profile;