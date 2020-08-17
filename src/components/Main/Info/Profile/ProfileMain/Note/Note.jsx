import React from 'react';
import style from "./Note.module.css"
import NoteItem from "./NodeItem/NoteItem";

function  Note(props) {

    let Notes = props.notePage.Notes.map(n => <NoteItem updateTextNotes={props.updateNotes}
                                                        updateNameText={props.updateName}
                                                        addNote={props.addNote}
                                                        deleteNoteItem={props.deleteNotes}
                                                        notePage={props.notePage}
                                                        value={n.values} id={n.id} name={n.name}/>);
    let addNote = () => {
        props.addNote();
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