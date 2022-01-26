import React, {useState, useEffect} from 'react';
import './messagesDivider.css'
import getCurrentDate from "../../helpers/getCurrentDate";

const getDate = (date) => {
    let today = new Date(date);
    return today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
}

const MessagesDivider = (props) => {

    const [messageDate, setMessageDate] = useState()
    const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

    useEffect(() => {
        if (getDate(getCurrentDate()) === getDate(props.dateMessages)) {
            setMessageDate("Today")
        } else if (getDate(yesterday) === getDate(props.dateMessages)) {
            setMessageDate("Yesterday")
        } else {
            const date = new Date(props.dateMessages)

            setMessageDate(date.toLocaleDateString('en-US', {weekday: 'long'}) + ', ' + date.getDate()
                + ' ' + date.toLocaleString('en-US', {month: 'long'}))

        }
    }, [props.dateMessages])


    return (
        <div className='messages-divider'>
            <span>{messageDate}</span>
        </div>

    );
}


export default MessagesDivider;
