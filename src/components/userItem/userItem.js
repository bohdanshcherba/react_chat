import React from 'react';
import './userItem.css'
const UserItem = ({id,username,deleteUser,editUser}) => {

    return (
        <div className={'user-item'}>
            <h4>{username}</h4>
            <button className={'user-edit'} onClick={()=>editUser(id)}>edit</button>
            <button className={'user-delete'} onClick={()=>deleteUser(id)}>delete</button>
        </div>
    );
};

export default UserItem;
