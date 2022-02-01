import './Chat.css';
import React, {useEffect, useState} from 'react';
import Header from "../../components/header/Header";

import MessageList from "../../components/messageList/messageList";
import MessageInput from "../../components/messageInput/messageInput";
import getCurrentDate from "../../helpers/getCurrentDate";
import Preloader from "../../components/preloader/preloader";
import {useDispatch,useSelector} from "react-redux";
import {chatActionCreator} from '../../store/actions'
import EditMessageModal from "../../components/editMessageModal/editMessageModal";
const Chat = () => {

    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [idForUpdate, setIdForUpdate] = useState()

    const items = useSelector(state => state.chat.messages)
    const user = useSelector(state => state.user.currentUser)
    const isLoading = useSelector(state => state.chat.preloader)

    useEffect(() => {
        dispatch(chatActionCreator.getMessages())
    }, [])

    const handlerOnChange = (e) => {
        setValue(e.target.value)
    }

    const sendMessage = (e) => {
        e.preventDefault()
        const message ={
            "user": user?.username,
            "text": value,
            "userId": user?.id,
            "createdAt": getCurrentDate()
        }

        dispatch(chatActionCreator.sendMessage(message))


        setValue('')

    }

    const updateMessage = (e,text) => {
        e.preventDefault()
        dispatch(chatActionCreator.updateMessage({id:idForUpdate, text:text}))

    }

    const deleteMessage = (id) => {
        dispatch(chatActionCreator.deleteMessage(id))
    }

    return (

        <div className='chat'>
            {isLoading ? <Preloader/> : <>

                <Header countMessages={items.length} items={items}/>
                <MessageList messages={items} userId={user?.id} deleteMessage={deleteMessage} setIdForUpdate={setIdForUpdate}/>
                <EditMessageModal updateMessage={updateMessage}/>
                <MessageInput value={value}
                              handlerOnChange={handlerOnChange}
                              sendMessage={sendMessage}
                              />

            </>   }



        </div>

    )


}


export default Chat;
