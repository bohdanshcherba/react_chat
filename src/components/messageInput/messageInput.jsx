import React from 'react';
import './messageInput.css'


const MessageInput = props => {

    const submitHandler = (e) => {
        props.sendMessage(e)

    }

    const onEnterPress = (e) => {
        if (e.keyCode === 13 && e.shiftKey === false) {
            submitHandler(e)
        }
    }

    return (
        <form className='message-input' onSubmit={submitHandler}>
                    <textarea onChange={props.handlerOnChange}
                              value={props.value} className='message-input-text' onKeyDown={onEnterPress}/>
            <button type='submit' className='message-input-button'>Send</button>
        </form>

    );
}


export default MessageInput;
