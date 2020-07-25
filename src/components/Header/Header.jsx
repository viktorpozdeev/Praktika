import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

function  Header() {
    return (
        <div className={style.header}>
            <div className={style.logo}><img className={style.imgLogo} src="https://pkstpb.ru/images/novosti/2018/noyabr/kisspng-samsung-galaxy-a3-2016-samsung-galaxy-a3-2015-5b243c9fede1c2.1810357615291014719744.png" alt="logo"/></div>
            <div className={style.home}><NavLink className={style.home} to="/profile/profilefeed" >Home</NavLink></div>
            <div className={style.subjects}><NavLink className={style.subjects} to="/subjects" >Subjects</NavLink></div>
            <div className={style.friends}><NavLink className={style.friends} to="/friends" >Friends</NavLink></div>
            <div className={style.QnA}><NavLink className={style.QnA} to="/qna" >QnA</NavLink></div>
        </div>
    );
}

export default Header;