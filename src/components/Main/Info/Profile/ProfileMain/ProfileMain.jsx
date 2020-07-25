import React from 'react';
import style from './ProfileMain.module.css';
import ProfileFeed from "./ProfileFeed/ProfileFeed";
import {Route} from "react-router-dom";
import Note from "./Note/Note";


function  ProfileMain(props) {
    return (
        <div className={style.profileMain}>
            <Route path='/profile/profilefeed' render={() => (<ProfileFeed profilePage={props.state.ProfilePage} dispatch={props.dispatch}/>)}/>
            <Route path='/profile/note/' render={() => (<Note notePage={props.state.NotesPage} dispatch={props.dispatch} />)}/>
        </div>
    );
}

export default ProfileMain;