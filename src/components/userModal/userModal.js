import React from 'react';
import {Button, Form, Input} from "antd";
import './userModal.css'

const UserModal = ({createUser, setOpenModal, openModal,updating,updateUser}) => {
    return (
        <div className={'modal-users'}>
            <Form
                autoComplete={'off'}
                onFinish={updating? updateUser: createUser}
            >
                <Form.Item
                    name="username"

                >
                    <Input placeholder={'username'}/>
                </Form.Item>

                <Form.Item
                    name="password"
                >
                    <Input.Password placeholder={'password'}/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className='user-create'>
                        {updating ? 'Update': 'Create'}
                    </Button>
                    <Button onClick={() => {
                        setOpenModal(!openModal)
                    }}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
};

export default UserModal;
