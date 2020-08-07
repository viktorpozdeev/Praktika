import React, {useState} from 'react';
import NoteItem from "./NodeItem/NoteItem";
import style from "./Note.module.css"
import {addNotesCreate} from "../../../../../../Redux/NotesReducer";

function  Note(props) {
    let Notes = props.notePage.Notes.map(n => <NoteItem  notePage={props.notePage} dispatch={props.dispatch} value={n.values} id={n.id} name={n.name}/>)
    let addNote = () => {
        props.dispatch(addNotesCreate());
    };
    return (
        <div>
            <div className={style.wrap}>
                <button onClick={addNote} className={style.btn} title="Добавить заметку">&#10010; Добавить заметку</button>
            </div>
            <div>
                {Notes}
            </div>
        </div>
    );
}

export default Note;