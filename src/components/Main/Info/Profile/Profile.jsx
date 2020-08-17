import React from 'react';
import style from './Profile.module.css';
import NavBar from "./NavBar/NavBar";
import UserInfo from "./UserInfo/UserInfo";
import ProfileMain from "./ProfileMain/ProfileMain";
import Settings from "./Settings/Settings";

function  Profile(props) {
    return (
        <div className={style.profile}>
            <UserInfo/>
            <Settings/>
            <ProfileMain store={props.store} />
            <NavBar/>
        </div>
    );
}

export default Profile;