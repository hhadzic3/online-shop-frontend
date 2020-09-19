import React from "react";
import 'components/Profile/Profile.scss'
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const ProfileCard = () => {

    return (
        
        <div class="card">
            <AccountCircleIcon className='icon' fontSize='large'/>    
            <h1>John Doe</h1>
            <p class="title">CEO & Founder, Example</p>
            <p>Harvard University</p>            
        </div>
    );
}

export default ProfileCard;