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
                            <h1>QnA</h1>
                            <h3>Задай вопрос и получи ответ</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.QnA}>
                <NavLink className={style.navLink} activeClassName={style.active} to='/qna/maths'>Матстат</NavLink>
                <NavLink className={style.navLink} activeClassName={style.active} to='/qna/network'>Сети</NavLink>
                <NavLink className={style.navLink} activeClassName={style.active} to='/qna/algebra'>Алгем</NavLink>
                <NavLink className={style.navLink} activeClassName={style.active} to='/qna/tips'>ТИПС</NavLink>
                <NavLink className={style.navLink} activeClassName={style.active} to='/qna/tv'>Теорвер</NavLink>
                <NavLink className={style.navLink} activeClassName={style.active} to='/qna/kg'>Графика</NavLink>
                <NavLink className={style.navLink} activeClassName={style.active} to='/qna/obj'>ОБЖ</NavLink>
            </div>
        </div>
    );
}

export default Friends;