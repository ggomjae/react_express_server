import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../_actions/user_action';
import { Form, Input, Typography, Button } from 'antd';

import './UpdatePage.scss';

const { Title } = Typography;

function UpdatePage(props) {

    const dispatch = useDispatch();
    const [newPassword, setNewPassword] = useState("");

    const onNewPasswordHandler = (e) => {
        setNewPassword(e.currentTarget.value);
    }

    const onLogoutHandler = () => {
        axios.get('/api/user/logout')
        .then(res => {
            if(res.data.logoutSuccess) {
                alert('o');
                props.history.push('/login');
            } else {
                alert('x');
            }
        });
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        let requestBody = {
            password: newPassword
        };

        dispatch(updateUser(requestBody))
        .then(res => {
            if(res.payload.updateSuccess) {
                onLogoutHandler();
            } else {
                alert(res.payload.message);
            }
        })
    }

    return (
        <div className='update_page_wrap'>
            <div className='update_container'>
                <Title level={2} style={{color: '#40a9ff'}}>비밀번호 변경</Title>
                <form className='update_form' onSubmit={onSubmitHandler}>
                    <Form.Item>
                        <label>새 비밀번호</label>
                        <Input
                            id="new_password"
                            placeholder="새 비밀번호를 입력하십시오!"
                            type="password"
                            value={newPassword}
                            onChange={onNewPasswordHandler}
                            required
                        />
                    </Form.Item>
                    <br />
                    <Button type="primary" htmlType="submit">
                        비밀번호 변경
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default withRouter(UpdatePage);