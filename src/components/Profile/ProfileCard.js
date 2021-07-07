import React, { useState, useEffect } from "react";
import 'components/Profile/Profile.scss'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import jwt_decode from 'jwt-decode'

const ProfileCard = () => {

    const [profile, setProfile] = useState({});

    useEffect(() => {
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      setProfile({
        full_name: decoded.full_name,
        email: decoded.email,
        country: decoded.country
      })
    },[]);

    return (
        <div className="card">
            <AccountCircleIcon className='icon' fontSize='large'/>    
            <h1>{profile.full_name}</h1>
            <p className="title">{profile.email}</p>
            <p>{profile.country}</p>            
        </div>
    );
}

export default ProfileCard;