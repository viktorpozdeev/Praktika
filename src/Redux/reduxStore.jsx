import {combineReducers, createStore} from 'redux'
import ProfileReducer from "./ProfileReducer";
import NotesReducer from "./NotesReducer";



let reducers = combineReducers({
    profilePage: ProfileReducer,
    notePage: NotesReducer
})

let store = createStore(reducers);

export default store;