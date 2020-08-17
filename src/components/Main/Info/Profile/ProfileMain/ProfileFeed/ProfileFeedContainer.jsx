import React from 'react';
import {
    addPostCreate,
    deletePostCreate, likePostPlusCreate, updatePostCreate,
    updateTextareaImgCreate,
    updateTextareaPostCreate
} from "../../../../../../Redux/ProfileReducer";
import ProfileFeed from "./ProfileFeed";

import {connect} from "react-redux";


let mapStateToProps = (state) => ({
        profilePage: state.profilePage
    });
let mapDispatchToProps = (dispatch) =>({
        changePostText: (textPost) => {
            dispatch(updateTextareaPostCreate(textPost));
        },
        changePostLinkImg: (textLinkImg) => {
            dispatch(updateTextareaImgCreate(textLinkImg));
        },
        addPost: () => {
            dispatch(addPostCreate());
        },
        deletePost: (id) => {
            dispatch(deletePostCreate(id));
        },
        updatePost: (id, text) => {
            dispatch(updatePostCreate(id, text));
        },
        likePlus: (id) => {
            dispatch(likePostPlusCreate(id));
        }
    });

const ProfileFeedContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileFeed);


export default ProfileFeedContainer;