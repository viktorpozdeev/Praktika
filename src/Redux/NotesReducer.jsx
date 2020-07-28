// define constants action type

const ADD_NOTES = 'ADD-NOTES';
const DELETE_NOTES =  'DELETE-NOTES';
const UPDATE_NOTES = 'UPDATE-NOTES';
const UPDATE_NOTES_NAME = 'UPDATE-NOTES-NAME';

// define functions create obj action

export const addNotesCreate = (id) => ({type: ADD_NOTES, id: id});
export const deleteNotesCreate = (id) => ({type: DELETE_NOTES, id: id});
export const updateNotesCreate = (id, text) => ({type: UPDATE_NOTES, id: id, text: text});
export const updateNotesNameCreate = (id, text) => ({type: UPDATE_NOTES_NAME, id: id, text: text});

const NotesReducer = (state, action) => {

    // " i " it's template variable

    let i;

    switch (action.type) {
        case ADD_NOTES:
            let temp = state.Notes[0].id + 1;
            let item = {id: temp, name: "Новая заметка", values: ""};
            state.Notes.unshift(item);
            return state;
        case DELETE_NOTES:
            state.Notes.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            state.Notes.splice(i, 1);
            return state;
        case UPDATE_NOTES:
            state.Notes.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            state.Notes[i].values = action.text;
            return state;
        case UPDATE_NOTES_NAME:
            state.Notes.forEach((el, num, arr) =>
                el.id === action.id ? i = num : i
            );
            state.Notes[i].name = action.text;
            return state;
        default: return state;
    }


};

export default NotesReducer;