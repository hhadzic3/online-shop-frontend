import React, { Component } from 'react'
import TabPanel from 'components/Profile/TabPanel';
import 'components/Profile/Profile.scss';

class Profile extends Component {
  
  render() {
    return (
      <div className='profile'> 
        <TabPanel></TabPanel>
      </div>
    )
  }
}

export default Profile;