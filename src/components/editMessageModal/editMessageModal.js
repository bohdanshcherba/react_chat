import React, {useState} from 'react';
import './modal.css'
import {useDispatch, useSelector} from "react-redux";
import {chatActionCreator} from "../../store/actions";

const EditMessageModal = ({updateMessage}) => {
    const editModal = useSelector(state => state.chat.editModal)
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const handlerOnChange = (e) => {
        setValue(e.target.value)
    }
    const Edit = (e) => {
        updateMessage(e, value)
    }

    return (
        <div className={editModal ? 'modal-shown' : 'edit-message-modal'}>
            <textarea className={'edit-message-input'} onChange={handlerOnChange}/>


            <div className={'btn-edit'}>
                <button className="edit-message-button" onClick={Edit}>
                    Save
                </button>
                <button className="edit-message-close" onClick={() => {
                    dispatch(chatActionCreator.openModal(false))
                }}>Cancel
                </button>
            </div>
        </div>
    );
};

export default EditMessageModal;
