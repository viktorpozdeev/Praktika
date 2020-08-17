import React from 'react';
import style from './ProfileMain.module.css';
import {Route} from "react-router-dom";
import ProfileFeedContainer from "./ProfileFeed/ProfileFeedContainer";
import NoteContainer from "./Note/NoteContainer";


function ProfileMain(props) {
    return (
        <div className={style.profileMain}>
            <Route path='/profile/profilefeed'
                   render={() => (<ProfileFeedContainer store={props.store} />)}/>
            <Route path='/profile/note/'
                   render={() => (<NoteContainer store={props.store} />)}/>
        </div>
    );
}

export default ProfileMain;