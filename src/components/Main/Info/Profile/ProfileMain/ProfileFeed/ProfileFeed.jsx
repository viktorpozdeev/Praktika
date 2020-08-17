import React from 'react';
import style from './ProfileFeed.module.css';
import Post from "./Post/Post";



function  ProfileFeed(props) {

    let posts = props.profilePage.Posts.map(p => <Post deletePost={props.deletePost}
                                                             updateTextPost={props.updatePost}
                                                             likePlusPost={props.likePlus}
                                                             style={props.profilePage.StyleModal}
                                                             id={p.id} value={p.values}
                                                             likeCount={p.likeCount}
                                                             url={p.urlImg}/>)

    let changeTextarea = (e) => {
        let textPost = e.target.value;
        props.changePostText(textPost);
    };
    let changeTextareaImg = (e) => {
        let textLinkImg = e.target.value;
        props.changePostLinkImg(textLinkImg);
    };
    let addPost = () => {
        props.addPost();
    };
    return (
        <div className={style.profileFeed1}>
            {/*textarea area*/}

            <div className={style.profileFeed} >
                <div className={style.wrapInput}>
                    <textarea onChange={changeTextarea} className={style.inputPost}  value={props.profilePage.textUpdate} placeholder='Напишите учебный пост для одногруппников...'type="text"/>
                </div>
                <div className={style.wrapInput2}>
                    <textarea onChange={changeTextareaImg}  className={style.inputPost2} value={props.profilePage.textImglink} placeholder='Вставте ссылку на картинку...' type="text"/>
                    <button onClick={addPost} className={style.btn}>Опубликовать</button>
                </div>
            </div>
            {/*Post area*/}
            <div className={style.posts}>
                {posts}
            </div>


        </div>
    );
}

export default ProfileFeed;