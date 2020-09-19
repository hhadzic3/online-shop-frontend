import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import TabPanel from 'components/Profile/TabPanel';
import 'components/Profile/Profile.scss';

class Profile extends Component {
  
  constructor() {
    super()
    this.state = {
      full_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      this.setState({
        full_name: decoded.full_name,
        email: decoded.email
      })
  }

  render() {
    return (
      <div className='profile'> 
        <TabPanel></TabPanel>
      </div>
    )
  }
}

export default Profile;