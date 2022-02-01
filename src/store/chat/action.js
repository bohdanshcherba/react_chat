import {createAsyncThunk} from '@reduxjs/toolkit';
import ActionType from './common';

const getMessages = createAsyncThunk(ActionType.GET_MESSAGES, async (request, {extra: {services}}) => {
        const messages = await services.chat.getAllMessages()
        return {messages}
    }
);

const sendMessage = createAsyncThunk(ActionType.SEND_MESSAGE, async (request, {extra: {services}}) => {
    const message = await services.chat.sendMessage(request)
    return {message}
})

const updateMessage = createAsyncThunk(ActionType.UPDATE_MESSAGE, async (request, {getState, extra: {services}}) => {
    const {id, text} = request
    const message = await services.chat.updateMessage(id, text)

    const {chat} = getState()

    const updated = chat.messages.map(mess => (
        mess.id !== message.id ? mess : message
    ));

    return {messages: updated}
})

const deleteMessage = createAsyncThunk(ActionType.DELETE_MESSAGE, async (request, {extra: {services}}) => {
    const messages = await services.chat.delete(request)

    return {messages}
})

const openModal = createAsyncThunk(ActionType.MODAL_OPEN, async (request, {extra: {services}}) => {

    return {editModal: request}
})

export {getMessages, sendMessage, deleteMessage, updateMessage,openModal}
