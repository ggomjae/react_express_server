import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input, Typography, Button } from 'antd';

import './UpdatePage.scss';

const { Title } = Typography;

function UpdatePage(props) {

    const [newPassword, setNewPassword] = useState("");

    const onNewPasswordHandler = (e) => {
        setNewPassword(e.currentTarget.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

    }

    return (
        <div className='update_page_wrap'>
            <div className='update_container'>
                <Title>비밀번호 변경</Title>
                <form className='update_form' onSubmit={onSubmitHandler}>
                    <Form.Item>
                        <label>새 비밀번호</label>
                        <Input
                            id="newPassword"
                            placeholder="새 비밀번호를 입력하세요."
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