import {createAsyncThunk} from '@reduxjs/toolkit';
import ActionType from './common';

const login = createAsyncThunk(ActionType.LOG_IN, async (request, {extra: {services}}) => {
        const user = await services.user.login(request)

        sessionStorage.setItem("user", user)

        return {user, isAdmin: user.username === 'admin'}

    }
);
const logout = createAsyncThunk(ActionType.LOG_OUT, async (request, {extra: {services}}) => {
        sessionStorage.setItem("user", null)

        return {user: null, isAdmin: false}

    }
);

const loadCurrentUser = createAsyncThunk(ActionType.LOG_IN, async (request, {extra: {services}}) => {

        return {user: null, isAdmin: false}

    }
);

const getUsers = createAsyncThunk(ActionType.GET_USERS, async (request, {extra: {services}}) => {

        const users = await services.user.getAll()
        return {users}
    }
);

const createUser = createAsyncThunk(ActionType.CREATE_USER, async (request, {extra: {services}}) => {

        const user = await services.user.create(request)
        return {user}

    }
);

const updateUser = createAsyncThunk(ActionType.UPDATE_USER, async (request, {extra: {services}}) => {
        const {userId, data} = request
        const users = await services.user.update(data, userId)
        return {users}


    }
);

const deleteUser = createAsyncThunk(ActionType.DELETE_USER, async (request, {extra: {services}}) => {
        console.log(request)
        const {id} = request
        const users = await services.user.delete(id)
        return {users}

    }
);


export {login, logout, getUsers, loadCurrentUser, createUser, updateUser, deleteUser}
