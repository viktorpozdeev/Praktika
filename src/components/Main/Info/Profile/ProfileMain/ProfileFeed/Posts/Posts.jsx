import React from 'react';  
import style from './Posts.module.css';
import Post from "./Post/Post";


function  Posts(props) {

    let posts = props.profilePage.Posts.map( p => <Post style={props.profilePage.StyleModal} dispatch={props.dispatch} id={p.id} value={p.values} likeCount={p.likeCount} url={p.urlImg} />)

    return (
        <div className={style.posts}>
            {posts}
        </div>
    );
}

export default Posts;