import React from 'react';
import {faHeart, faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './header.css'
const Header = ({countMessages, items}) => {

    const lastMessage = items[items.length-1]

    const re = /[0-9][0-9]:[0-9][0-9]/

    const datetime = re.exec(lastMessage?.createdAt)

    const members = new Set()
    items?.map((mess) => members.add(mess.userId))



    return (
        <div className='about-chat'>
            <div className='chat-name'>
                Remo
            </div>
            <div className='chat-members'>
                {members?.size} members
            </div>
            <div className='chat-count-messages'>
                {countMessages} messages
            </div>
            <div className='chat-last-messages'>
                last message at {datetime ? datetime[0] : "" }
            </div>
        </div>
    );
}

export default Header;
