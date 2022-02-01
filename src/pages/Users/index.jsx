import React, {useEffect, useState} from 'react';
import UserItem from "../../components/userItem/userItem";
import './Users.css'
import {useDispatch, useSelector} from "react-redux";
import {usersActionCreator} from "../../store/actions";
import {Button, Form, Input} from "antd";
import UserModal from "../../components/userModal/userModal";

const UsersList = () => {

    const dispatch = useDispatch()

    const users = useSelector(state => state.user.users) || []

    const [openModal, setOpenModal] = useState(false)
    const [userId, setUserId] = useState(null)
    const [updating, setUpdating] = useState(false)

    useEffect(() => {
        dispatch(usersActionCreator.getUsers())

    }, [openModal])

    const createUser = (data) => {

        setOpenModal(!openModal)
        dispatch(usersActionCreator.createUser({username: data.username, password: data.password}))
    }


    const deleteUser = (id)=>{
        dispatch(usersActionCreator.deleteUser({id}))
    }

    const editUser = (id)=>{
        setOpenModal(!openModal)
        setUserId(id)
        setUpdating(true)
    }

    const updateUser = (data)=>{
        dispatch(usersActionCreator.updateUser({userId,data}))

        setOpenModal(false)
        setUpdating(false)
    }

    return (
        <div className='users'>
            <button onClick={()=>{setOpenModal(!openModal)}}>Add user</button>

            <div className='user-list'>
                {users?.map(user => {
                    if (user.username === 'admin'){
                        return null
                    }
                    return <UserItem key={user?.id} id={user?.id} username={user?.username}
                                     deleteUser={deleteUser}
                                     editUser={editUser}/>
                    }
                )}
            </div>
            {openModal? <UserModal
                createUser={createUser}
                updateUser={updateUser}
                updating={updating}
                setOpenModal={setOpenModal}
                openModal={openModal}/> :null}
        </div>
    );
};

export default UsersList;
