import React, {useState} from 'react';
import style from './NoteItem.module.css';
import Modal from "react-modal";

Modal.setAppElement('#root');


function NoteItem(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    /* логика для текстэрия в модальном окне*/
    let bodyNotes = React.createRef();
    let nameNotes = React.createRef();
    let updateNotes = () => {
        let textNode = bodyNotes.current.value;
        let temp = props.dispatch({type: 'DETECT-NOTES', id: props.id});
        props.dispatch({type: 'UPDATE-NOTES', template: temp, text: textNode});
    }
    let updateName = () => {
        let name = nameNotes.current.value;
        let temp = props.dispatch({type: 'DETECT-NOTES', id: props.id});
        props.dispatch({type: 'UPDATE-NOTES-NAME',template: temp, text: name});
    }
    /* логика для добавления заметки*/
    let addNotes = () => {
        let idNewNote = props.dispatch({type: 'DETECTED-NEW-ID-NOTE'});
        props.dispatch({type: 'ADD-NOTES',id: idNewNote});
        debugger;
        props.value !== "" || props.value === "" ? setModalIsOpen(true) : setModalIsOpen(false);
    };
    let deleteNotes = () => {
        props.dispatch({type: 'DELETE-NOTES', id: props.id});
    };

    return (
        <div className={style.notes}>

            {/*Модальное окно для заметок*/}

            <Modal className={style.modalWindow} isOpen={modalIsOpen}
                   shouldCloseOnOverlayClick={() => setModalIsOpen(false)}
                   onRequestClose={() => setModalIsOpen(false)} style={props.notePage.StyleModal}>
                <a onClick={() => setModalIsOpen(false)} className={style.close}>&#10006;</a>
                <input onChange={updateName} className={style.nameNoteModal} ref={nameNotes} value={props.name}/>
                <div className={style.bodyModalNote}>
                    <textarea onChange={updateNotes} ref={bodyNotes} className={style.textArea} value={props.value}
                              name="notes"/>
                </div>
                <div className={style.footerModalNote}>
                    <button onClick={() => setModalIsOpen(false)} className={style.btn}>Close</button>
                    <button onClick={updateNotes} className={`${style.btn} ${style.btnSave}`}>Save</button>
                </div>
            </Modal>

            {/*Непосредственно заметки*/}

            <div className={style.note}>
                <a onClick={() => setModalIsOpen(true)} className={style.linkModal}>
                    <span className={style.circleNote}>&bull;</span>
                    <span className={style.nameNote}>{props.name}</span>
                </a>
                <button className={style.btnNote} onClick={addNotes} title="Добавить заметку">&#10010;</button>
                <button className={style.btnNote} onClick={() => setModalIsOpen(true)}
                        title="Изменить заметку">&#9998;</button>
                <button className={style.btnNote} onClick={deleteNotes} title="Удалить заметку">&#10006;</button>
            </div>

        </div>
    );
}

export default NoteItem;