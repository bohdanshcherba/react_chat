import React, {useState} from 'react';
import './message.css'
import {faHeart, faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Message = (props) => {

    const [liked, setLiked] = useState(false)

    const onClickHandler = () => {
        setLiked(!liked)

    }

    const {username, avatar, text, createdAt} = props

    const re = /[0-9][0-9]:[0-9][0-9]/

    const datetime = re.exec(createdAt)

    return (

        <div className='message'>

            <img className="message-user-avatar" src={avatar} alt=""/>
            <div className="message-user-name">{username}</div>

            <p className="message-text">{text}</p>
            <div className="message-time">{datetime[0]}</div>
            <button className={liked ? 'message-like message-liked' : "message-like"} onClick={onClickHandler}>
                <FontAwesomeIcon icon={faHeart}/></button>


        </div>

    );
}


export default Message;
