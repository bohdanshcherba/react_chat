import './Chat.css';
import React, {useEffect, useState} from 'react';
import Header from "./components/header/Header";
import PageHeader from "./components/pageHeader/pageHeader";
import MessageList from "./components/messageList/messageList";
import MessageInput from "./components/messageInput/messageInput";
import guid from "./helpers/genereteRandomId";
import getCurrentDate from "./helpers/getCurrentDate";
import Preloader from "./components/preloader/preloader";

const Chat = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([{
        avatar: "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
        createdAt: "2020-07-16T19:48:12.936Z",
        editedAt: "",
        id: "80f08600-1b8f-11e8-9629-c7eca82aa7bd",
        text: "I don’t *** understand. It's the Panama accounts",
        user: "Ruth",
        userId: "9e243930-83c9-11e9-8e0c-8f1a686f4ce4"}]);
    const [value, setValue] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [idForUpdate, setIdForUpdate] = useState()

    useEffect(() => {
        setIsLoading(true);
        fetch(props?.url).then(res => res.json())
            .then(
                (result) => {
                    setIsLoading(false);
                    setItems(result);
                })

    }, [])

    const handlerOnChange = (e) => {
        setValue(e.target.value)
    }

    const sendMessage = (e) => {
        e.preventDefault()
        items.push({
            avatar: "https://resizing.flixster.com/kr0IphfLGZqni5JOWDS2P1-zod4=/280x250/v1.cjs0OTQ2NztqOzE4NDk1OzEyMDA7MjgwOzI1MA",
            createdAt: getCurrentDate(),
            editedAt: "",
            id: guid(),
            text: value,
            user: "CurrentUser",
            userId: "CurrentUser",
        })

        setValue('')

    }

    const updateMessage = (e) => {
        e.preventDefault()
        setIsEdit(false)

        let index = items.findIndex((m => m.id === idForUpdate));

        items[index].text = value
        items[index].editedAt = getCurrentDate()

        console.log(items[index])

        setValue('')

    }

    const deleteMessage = (id) => {

        setItems(items.filter(e => e.id !== id))

    }

    const editMessage = (id, text) => {
        setValue(text)
        setIdForUpdate(id)
        setIsEdit(true)
    }


    return (

        <div className='chat'>
            {isLoading ? <Preloader/> : <>

                <Header countMessages={items.length} items={items}/>
                <MessageList messages={items} deleteMessage={deleteMessage} editMessage={editMessage}/>
                <MessageInput value={value}
                              isEdit={isEdit}
                              handlerOnChange={handlerOnChange}
                              sendMessage={sendMessage}
                              updateMessage={updateMessage}/>

            </>   }



        </div>

    )


}


export default Chat;
