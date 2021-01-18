import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Typography, Button } from 'antd';

import './SignUpPage.scss';

const { Title } = Typography;

function RegisterPage(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  }

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

  }

  return (
    <div className='signup_page_wrap'>
      <div className='signup_container'>
        <Title>회원가입</Title>
        <form className='signup_form' onSubmit={onSubmitHandler}>
          <Form.Item>
              <label>Email</label>
              <Input
                  id="email"
                  placeholder="이메일을 입력하세요."
                  type="email"
                  value={email}
                  onChange={onEmailHandler}
                  required
              />
          </Form.Item>

          <Form.Item>
            <label>Password</label>
            <Input
              id="password"
              placeholder="비밀번호를 입력하세요."
              type="password"
              value={password}
              onChange={onPasswordHandler}
              required
            />
          </Form.Item>
          <br />

          <Button type="primary" htmlType="submit">
              가입
          </Button>
        </form>
      </div>
    </div>
  )
}

export default withRouter(RegisterPage);