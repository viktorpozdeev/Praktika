import React from 'react';
import style from './Main.module.css';
import Info from "./Info/Info";
import store from "../../Redux/store";


function  Main(props) {
    return (
        <div className={style.main}>
            <Info store={props.store} />
        </div>
    );
}

export default Main;