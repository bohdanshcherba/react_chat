import React from 'react';
import {  Form, Input, Button, Checkbox  } from 'antd'
import { useDispatch, useSelector} from 'react-redux'
import {usersActionCreator} from "../../store/actions";

const Login = () => {

    const dispatch = useDispatch()

    const onSubmit = async (field) => {
        const data = {username: field.username,
            password: field.password
        }

        await dispatch(usersActionCreator.login(data))

    }


    return (
        <Form

            onFinish={onSubmit}
            onFinishFailed={()=>{
                console.log('e')}}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>



            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Login;
