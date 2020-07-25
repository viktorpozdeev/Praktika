import React from 'react';
import style from './Settings.module.css';
import {NavLink} from "react-router-dom";


function  Settings() {
    return (
        <div className={style.settings}>
            <NavLink to="/profile/profilefeed" activeClassName={style.activeNav} className={style.navLink}>Стена</NavLink>
            <NavLink to="/profile/note" activeClassName={style.activeNav} className={style.navLink}>Заметки</NavLink>
        </div>
    );
}

export default Settings;