import React from 'react';
import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";

function  NavBar() {
    return (
        <div className={style.navBar}>
            <div className={style.box}>
                <NavLink to='/' className={style.navLink }> Друзья </NavLink>
                <NavLink to='/' className={style.navLinkBox }>  </NavLink>
            </div>
            <div className={style.box}>
                <NavLink to='/qna' className={style.navLink}>Ответы на вопросы</NavLink>
                <NavLink to='/' className={style.navLinkBox }>  </NavLink>
            </div>
            <div className={style.box}>
                <NavLink to='/subjects' className={style.navLink}>Предметы</NavLink>
                <NavLink to='/' className={style.navLinkBox }>  </NavLink>
            </div>
        </div>
    );
}

export default NavBar;