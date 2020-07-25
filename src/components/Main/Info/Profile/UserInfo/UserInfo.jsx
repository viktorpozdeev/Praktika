import React from 'react';
import style from './UserInfo.module.css';

function  UserInfo() {
    return (
        <div className={style.userInfo}>
            <div className={style.avatar}></div>
            <div>
                <div className={style.userName}>monpase007</div>
            </div>
        </div>
    );
}

export default UserInfo;