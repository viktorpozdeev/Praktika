import React from 'react';
import style from './ProfileFeed.module.css';
import Posts from "./Posts/Posts";
import {addPostCreate, updateTextareaImgCreate, updateTextareaPostCreate} from "../../../../../../Redux/ProfileReducer";


function  ProfileFeed(props) {
    let changeTextarea = (e) => {
        let textPost = e.target.value;
        props.dispatch(updateTextareaPostCreate(textPost));
    };
    let changeTextareaImg = (e) => {
        let textLinkImg = e.target.value;
        props.dispatch(updateTextareaImgCreate(textLinkImg));
    };
    let addPost = () => {
        props.dispatch(addPostCreate());
    };
    debugger;
    return (
        <div className={style.profileFeed1}>
            <div className={style.profileFeed} >
                <div className={style.wrapInput}>
                    <textarea onChange={changeTextarea} className={style.inputPost}  value={props.profilePage.textUpdate} placeholder='Напишите учебный пост для одногруппников...'type="text"/>
                </div>
                <div className={style.wrapInput2}>
                    <textarea onChange={changeTextareaImg}  className={style.inputPost2} value={props.profilePage.textImglink} placeholder='Вставте ссылку на картинку...' type="text"/>
                    <button onClick={addPost} className={style.btn}>Опубликовать</button>
                </div>
            </div>
            <Posts profilePage={props.profilePage} dispatch={props.dispatch}/>

        </div>
    );
}

export default ProfileFeed;