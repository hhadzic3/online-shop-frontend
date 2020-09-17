import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      full_name: 'Test Test',
      email: 'test@gmail.com',
      errors: {}
    }
  }

  componentDidMount() {}

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