import React from 'react';
import './ownMessage.css'
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const OwnMessage = ({text, createdAt, messageId, deleteMessage, editMessage}) => {

    const re = /[0-9][0-9]:[0-9][0-9]/

    const datetime = re.exec(createdAt)

    const deleteHandler = () => {
        deleteMessage(messageId)
    }
    const editHandler = () => {
        editMessage(messageId, text)
    }

    return (

        <div className='own-message'>

            <div className={"own-message-content"}>
                <p className="message-text">{text}</p>
                <div className="message-time">{datetime}</div>
                <div className="message-edit" onClick={editHandler}>
                    <FontAwesomeIcon icon={faPen} color={'#14213d'}/>
                </div>
                <div className="message-delete " onClick={deleteHandler}>
                    <FontAwesomeIcon icon={faTrash} color={'#14213d'}/>
                </div>
            </div>


        </div>

    );
}


export default OwnMessage;
