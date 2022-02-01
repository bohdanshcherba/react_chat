import {createReducer, isAnyOf} from '@reduxjs/toolkit';
import {usersActionCreator} from "../actions";

const initialState = {
    currentUser: null,
    users: [],
    isAdmin: false
};

const reducer = createReducer(initialState, builder => {

    builder.addCase(usersActionCreator.login.rejected, (state) => {
        state.currentUser = null
    });

    builder.addCase(usersActionCreator.createUser.fulfilled, (state, action) => {
        const {user} = action.payload
        state.users = [user, ...state.users]

    })

    builder.addMatcher(isAnyOf(
        usersActionCreator.updateUser.fulfilled,
        usersActionCreator.deleteUser.fulfilled,
        usersActionCreator.getUsers.fulfilled,), (state, action) => {
        const {users} = action.payload
        state.users = users;
        }
    )

    builder.addMatcher(isAnyOf(usersActionCreator.login.fulfilled, usersActionCreator.logout.fulfilled, usersActionCreator.loadCurrentUser.fulfilled), (state, action) => {

        state.currentUser = action.payload.user;
        state.isAdmin = action.payload.isAdmin;
    });

})

export {reducer}
