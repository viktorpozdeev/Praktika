// define constants action.type
const UPDATE_TEXTAREA_POST = 'UPDATE-TEXTAREA-POST';
const UPDATE_TEXTAREA_POST_IMG = 'UPDATE-TEXTAREA-POST-IMG';
const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE-POST';
const UPDATE_POST = 'UPDATE-POST';
const LIKE_POST_PLUS = 'LIKE-POST-PLUS';
const LIKE_POST_MINUS = 'LIKE-POST-MINUS';

// define function when return obj (action)

export const updateTextareaPostCreate = (text) => ({type: UPDATE_TEXTAREA_POST, text: text});
export const updateTextareaImgCreate = (text) => ({type: UPDATE_TEXTAREA_POST_IMG, text: text});
export const addPostCreate = () => ({type: ADD_POST});
export const deletePostCreate = (id) => ({type: DELETE_POST, id: id});

export const updatePostCreate = (id, text) => ({type: UPDATE_POST, id: id, text: text});
export const likePostPlusCreate = (id) => ({type: LIKE_POST_PLUS, id: id});
export const likePostMinusCreate = (id) => ({type: LIKE_POST_MINUS, id: id});

//Reducer

const ProfileReducer = (state, action) => {
    // template variable i

    let i;

    switch (action.type) {
        case UPDATE_TEXTAREA_POST:
            state.textUpdate = action.text;
            return state;
        case UPDATE_TEXTAREA_POST_IMG:
            state.textImglink = action.text;
            return state;
        case ADD_POST:
            if (state.Posts.length === 0) {
                let item = {
                    id: 0,
                    values: state.textUpdate,
                    urlImg: state.textImglink,
                    likeCount: 0
                };
                state.Posts.unshift(item);
                state.textUpdate = '';
                state.textImglink = '';
            } else {
                let temp = state.Posts[0].id + 1;
                let item = {
                    id: temp,
                    values: state.textUpdate,
                    urlImg: state.textImglink,
                    likeCount: 0
                };
                state.Posts.unshift(item);
                state.textUpdate = '';
                state.textImglink = '';
            }
            return state;
        case DELETE_POST:
            state.Posts.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            state.Posts.splice(i, 1);
            return state;
        case UPDATE_POST:
            state.Posts.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            state.Posts[i].values = action.text;
            return state;
        case LIKE_POST_PLUS:
            state.Posts.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            state.Posts[i].likeCount++;
            return state;
        case LIKE_POST_MINUS:
            state.Posts.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            state.Posts[i].likeCount--;
            return state;
        default: return state;
    }

};
export default ProfileReducer;