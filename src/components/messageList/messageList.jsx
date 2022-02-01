import React, {useEffect, useRef} from 'react';
import './messageList.css'

import Message from "../../components/message/message";
import OwnMessage from "../ownMessage/ownMessage";

import MessagesDivider from "../messageDivider/messagesDivider";


const MessageList = props => {
    const messagesEndRef = useRef(null)
    const re = /[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]/

    const today = new Date();
    let date = today.getFullYear() + '-' + '0' + (today.getMonth() + 1) + '-' + today.getDate();



    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({behavior: "smooth"})
    }

    const messageDate = new Set()
    props.messages.map((mess) => messageDate.add(re.exec(mess.createdAt)[0]))



    const listMessages = props.messages.map(message => {
        return <div key={message.id}>
            {
                Array.from(messageDate).map(item=>{
                    if(re.exec(message.createdAt)[0] === item){
                        messageDate.delete(item)
                        return <MessagesDivider dateMessages={item} key={item}/>
                    }

                })
            }
            {message.userId === props.userId ?
                <OwnMessage text={message.text}
                            createdAt={message.createdAt}
                            messageId = {message.id}
                            deleteMessage={props.deleteMessage}
                            setIdForUpdate={props.setIdForUpdate}

                />
                            :
                <Message username={message.user}
                         avatar={message.avatar}
                         text={message.text}
                         createdAt={message.createdAt}
                />}
        </div>


    })

    useEffect(() => {
        scrollToBottom()
        props.messages.map((mess) => messageDate.add(re.exec(mess.createdAt)[0]))

    }, [listMessages]);



    return (

        <div className='message-list'>

            {Array.from(messageDate).map(item=>{
                return <MessagesDivider dateMessages={item} key={item}/>
            })}
            {listMessages}
            <div ref={messagesEndRef}/>
        </div>


    );
}


export default MessageList;
