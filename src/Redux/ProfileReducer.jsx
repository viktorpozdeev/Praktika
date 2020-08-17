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

// bind state
let initializeState = {
    Posts: [
        {id: 1,  values: "всее чиил",urlImg:'https://images4.alphacoders.com/921/thumb-1920-921846.jpg',  likeCount: 23}
    ],
    textUpdate: '',
    textImglink:'',
    StyleModal: {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(68,68,68,0.65)'
        }
    }
};


//Reducer
const ProfileReducer = (state = initializeState, action) => {
    // template variable i

    let i, stateCopy;

    switch (action.type) {
        case UPDATE_TEXTAREA_POST:
            return {
                ...state,
                textUpdate: action.text
            };
        case UPDATE_TEXTAREA_POST_IMG:
            return {
              ...state,
              textImglink: action.text
            };
        case ADD_POST:
            if (state.Posts.length === 0) {
                return {
                    ...state,
                    Posts: [{id: 0, values: state.textUpdate, urlImg: state.textImglink, likeCount: 0}, ...state.Posts],
                    textImglink: '',
                    textUpdate: ''
                };
            } else {
                let temp = state.Posts[0].id + 1;
                return {
                    ...state,
                    Posts: [{id: temp, values: state.textUpdate, urlImg: state.textImglink, likeCount: 0}, ...state.Posts],
                    textImglink: '',
                    textUpdate: ''
                };
            }
        case DELETE_POST:
            state.Posts.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            stateCopy = {...state, Posts: [...state.Posts]};
            stateCopy.Posts.splice(i, 1);
            return stateCopy;
        case UPDATE_POST:
            state.Posts.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            stateCopy = {...state, Posts: [...state.Posts]};
            stateCopy.Posts[i].values = action.text;
            return stateCopy;
        case LIKE_POST_PLUS:
            state.Posts.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            stateCopy = {...state, Posts: [...state.Posts]};
            stateCopy.Posts[i].likeCount++;
            return stateCopy;
        case LIKE_POST_MINUS:
            state.Posts.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            stateCopy = {...state, Posts: [...state.Posts]};
            stateCopy.Posts[i].likeCount--;
            return stateCopy;
        default: return state;
    }

};
export default ProfileReducer;