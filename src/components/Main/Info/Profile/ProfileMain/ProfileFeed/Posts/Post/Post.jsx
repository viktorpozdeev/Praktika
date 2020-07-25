import React, {useState} from 'react';
import style from './Post.module.css';
import Modal from "react-modal";

Modal.setAppElement = function (s) {

}
Modal.setAppElement('#root');

function  Post(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    let deletePost = () => {
        props.dispatch({type: 'DELETE-POST', id: props.id});
    };
    let refTextareaModal = React.createRef();
    let temp = props.dispatch({type:'DETECT-POST',id: props.id})
    let updatePost = () => {
        let text = refTextareaModal.current.value;
        props.dispatch({type: 'UPDATE-POST', template: temp, text: text});
    };

    let likePlus = () => {

            props.dispatch({type: 'LIKE-POST-PLUS',  template: temp});
    
    };

    return (
        <div className={style.posts}>
            {/*Модальное окно*/}
            <Modal className={style.modalWindow} isOpen={modalIsOpen}
                   shouldCloseOnOverlayClick={() => setModalIsOpen(false)}
                   onRequestClose={() => setModalIsOpen(false)} style={props.style} >
                <a onClick={() => setModalIsOpen(false)} className={style.close}>&#10006;</a>
                <div className={style.bodyModal}>
                    <textarea onChange={updatePost} ref={refTextareaModal} className={style.textArea} value={props.value}/>
                </div>
                <div className={style.footerModalNote}>
                    <button onClick={() => setModalIsOpen(false)} className={style.btnModal}>Close</button>
                    <button  className={`${style.btnModal} ${style.btnSave}`}>Save</button>
                </div>
            </Modal>
            <div className={style.user}>
                <img className={style.img} src="https://sun7-7.userapi.com/impf/c845419/v845419980/19601a/fYUtyCJnvO4.jpg?size=200x0&quality=90&sign=ef7740b6c1729cf94818347692822a20&ava=1" alt="аватарка"/>
                <div className={style.headerPost}>
                    <div>
                        <div className={style.name}>monpase007</div>
                        <div className={style.date}>25 ноя 2020г.</div>
                    </div>
                    <div className={style.btnsPosts}>
                        <a className={style.option} onClick={() => setModalIsOpen(true)} title='Редактировать пост'>&#9998;</a>
                        <a className={style.option} onClick={deletePost} title='Удалить пост'>&#10006;</a>
                    </div>
                </div>
            </div>
            <div className={style.post}>
                <div className={style.content}>
                    <div className={style.textPost}>{props.value}</div>
                    <img className={style.imgPost} src={props.url} />
                </div>
                <div className={style.bottom}>
                    <button className={style.btn} onClick={likePlus}>&#10084;</button><span>{props.likeCount}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;