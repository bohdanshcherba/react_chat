import React from 'react';
import {faHeart, faPen} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './header.css'
const Header = ({countMessages, items}) => {

    const lastMessage = items[items.length-1]

    const reTime = /[0-9][0-9]:[0-9][0-9]/
    const reYear = /[0-9][0-9][0-9][0-9]/
    const reMonth = /-[0-9][0-9]-/
    const reDay = /-[0-9][0-9]T/
    const reTwoNumber = /[0-9][0-9]/



    const time = reTime.exec(lastMessage?.createdAt)
    const year = reYear.exec(lastMessage?.createdAt)
    const month = reMonth.exec(lastMessage?.createdAt)
    const day = reDay.exec(lastMessage?.createdAt)


    const datetime = (reTwoNumber.exec(day)[0]+'.'+reTwoNumber.exec(month)[0]+'.'+year[0]+' ' + time[0])

    const members = new Set()
    items?.map((mess) => members.add(mess.userId))



    return (
        <div className='header'>
            <div className='header-title'>
                Remo
            </div>
            <div className='header-users-count'>
                {members?.size} members
            </div>
            <div className='header-messages-count'>
                {countMessages} messages
            </div>
            <div className='header-last-message-date'>
                {datetime}
            </div>
        </div>
    );
}

export default Header;
