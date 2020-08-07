import React from 'react';
import style from './Friends.module.css';
import {NavLink} from "react-router-dom";

function  Friends() {
    return (
        <div className={style.bodyQnA}>
            <div className={style.wrapWrapHeader}>
                <div className={style.wrapHeader}>
                    <div className={style.header}>
                        <div className={style.text}>
                            <h1>Friends</h1>
                            <h3>Человеку нужен человек</h3>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Friends;