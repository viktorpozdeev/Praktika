import React from 'react';
import style from './Main.module.css';
import Info from "./Info/Info";
import store from "../../store/store";


function  Main(props) {
    return (
        <div className={style.main}>
            <Info state={props.state} dispatch={props.dispatch} />
        </div>
    );
}

export default Main;