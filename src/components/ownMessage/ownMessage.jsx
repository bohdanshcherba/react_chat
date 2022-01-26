import React,{useState} from 'react';
import './ownMessage.css'
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const OwnMessage = ({text, createdAt, messageId, deleteMessage, editMessage}) => {

    const re = /[0-9][0-9]:[0-9][0-9]/
    const [deleted,setDeleted] = useState(false)

    const datetime = re.exec(createdAt)

    const deleteHandler = () => {
        setDeleted(true)

        setTimeout(()=>{
            deleteMessage(messageId)
        },1000)

    }
    const editHandler = () => {

        editMessage(messageId, text)
    }

    return (

        <div  className={deleted? 'own-message deletedMessage': 'own-message'}>

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
