import React, {useState} from 'react';
import './ownMessage.css'
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useDispatch} from "react-redux";
import {chatActionCreator} from '../../store/actions'
const OwnMessage = ({text, createdAt, messageId, deleteMessage,setIdForUpdate}) => {

    const re = /[0-9][0-9]:[0-9][0-9]/
    const dispatch = useDispatch()


    const datetime = re.exec(createdAt)

    const deleteHandler = () => {
        deleteMessage(messageId)
    }

    const editHandler = () => {
        setIdForUpdate(messageId)
        dispatch(chatActionCreator.openModal(true))
    }

    return (

        <div className='own-message'>

            <p className="message-text">{text}</p>

            <div className="message-time">{datetime}</div>

            <button className="message-edit" onClick={editHandler}>
                <FontAwesomeIcon icon={faPen} color={'#14213d'}/>
            </button>

            <button className="message-delete" onClick={deleteHandler}>
                <FontAwesomeIcon icon={faTrash} color={'#14213d'}/>
            </button>


        </div>

    );
}


export default OwnMessage;
