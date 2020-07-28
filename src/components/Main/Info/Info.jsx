import React from 'react';
import style from './Info.module.css';
import {Route} from "react-router-dom";
import Profile from "./Profile/Profile";
import QnA from "./QnA/QnA";
import Subjects from "./Subjects/Subjects";
import store from "../../../Redux/store";
import Friends from "./Friends/Friends";

function Info(props) {
    return (

        <div className={style.info}>
            <Route path='/profile' render={() => <Profile state={props.state} dispatch={props.dispatch}/>}/>
            <Route path='/qna' render={() => <QnA/>}/>
            <Route path='/subjects' render={() => <Subjects/>}/>
            <Route path='/friends' render={() => <Friends/>}/>
        </div>

    );
}

export default Info;