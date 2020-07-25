import React, {useState} from 'react';
import style from './Note.module.css';
import NoteItem from "./NodeItem/NoteItem";




function  Note(props) {

    let Notes = props.notePage.Notes.map(n => <NoteItem notePage={props.notePage} dispatch={props.dispatch} value={n.values} id={n.id} name={n.name}/>)

    return (

        <div className={style.notes}>
            <div className={style.note}>
                {Notes}
            </div>
        </div>
    );
}

export default Note;