import {createReducer, isAnyOf} from '@reduxjs/toolkit';
import {chatActionCreator} from '../actions'

const initialState = {
    messages: [{
        "id": "",
        "userId": "",
        "avatar": "",
        "user": "",
        "text": "",
        "createdAt": "2020-07-16T19:48:42.481Z",
        "editedAt": ""
    }],
    editModal: false,
    preloader: true
};

const reducer = createReducer(initialState, builder => {

    builder.addCase(chatActionCreator.sendMessage.fulfilled, (((state, action) => {
        const {message} = action.payload
        state.messages = [...state.messages, message]
    })))

    builder.addCase(chatActionCreator.getMessages.fulfilled, ((state, action) => {
        const {messages} = action.payload
        state.messages = messages
        state.preloader = false


    }))

    builder.addCase(chatActionCreator.openModal.fulfilled, (((state, action) => {
        const {editModal} = action.payload
        state.editModal = editModal
    })))

    builder.addMatcher(isAnyOf(chatActionCreator.deleteMessage.fulfilled,chatActionCreator.updateMessage.fulfilled), (((state, action) => {
        state.editModal = false
        const {messages} = action.payload
        state.messages = messages
    })))

    builder.addMatcher(isAnyOf(chatActionCreator.getMessages.pending),((state, action) => {
        state.preloader = true
    }))

    builder.addMatcher(isAnyOf(chatActionCreator.updateMessage.fulfilled),((state, action) => {
        state.editModal = false
    }))
})


export {reducer}
