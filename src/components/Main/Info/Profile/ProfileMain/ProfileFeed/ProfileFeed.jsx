import React from 'react';
import style from './ProfileFeed.module.css';
import Posts from "./Posts/Posts";


function  ProfileFeed(props) {
    let refTextPost = React.createRef();
    let refTextPostImg = React.createRef();

    let changeTextarea = () => {
        let textPost = refTextPost.current.value;
        props.dispatch({type: 'UPDATE-TEXTAREA-POST', text: textPost});
    };
    let changeTextareaImg = () => {
        let textLinkImg = refTextPostImg.current.value;
        props.dispatch({type: 'UPDATE-TEXTAREA-POST-IMG', text: textLinkImg});
    };
    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };
    return (
        <div className={style.profileFeed1}>
            <div className={style.profileFeed} >
                <div className={style.wrapInput}>
                    <textarea onChange={changeTextarea} className={style.inputPost} ref={refTextPost} value={props.profilePage.textUpdate} placeholder='Напишите учебный пост для одногруппников...'type="text"/>
                </div>
                <div className={style.wrapInput2}>
                    <textarea onChange={changeTextareaImg} ref={refTextPostImg} className={style.inputPost2} value={props.profilePage.textImglink} placeholder='Вставте ссылку на картинку...' type="text"/>
                    <button onClick={addPost} className={style.btn}>Опубликовать</button>
                </div>
            </div>
            <Posts profilePage={props.profilePage} dispatch={props.dispatch}/>

        </div>
    );
}

export default ProfileFeed;