import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Input, Typography, Button } from 'antd';

import './SignUpPage.scss';

const { Title } = Typography;

function RegisterPage(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  }

  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  }

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  }

  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if(password !== confirmPassword) {
      alert("비밀번호 확인을 정확히 해주십시오!");
      return;
    }

    let requestBody = {
      email,
      password,
      name
    };

    // dispatch
  }

  return (
    <div className='signup_page_wrap'>
      <div className='signup_container'>
        <Title level={2} style={{color: '#40a9ff'}}>Register</Title>
        <form className='signup_form' onSubmit={onSubmitHandler}>
          <Form.Item>
              <label>Email</label>
              <Input
                  id="email"
                  placeholder="이메일을 입력하십시오!"
                  type="email"
                  value={email}
                  onChange={onEmailHandler}
                  required
              />
          </Form.Item>

          <Form.Item>
            <label>Name</label>
            <Input
              id="name"
              placeholder="이름을 입력하십시오!"
              type="text"
              value={name}
              onChange={onNameHandler}
              required
            />
          </Form.Item>

          <Form.Item>
            <label>Password</label>
            <Input
              id="password"
              placeholder="비밀번호를 입력하십시오!"
              type="password"
              value={password}
              onChange={onPasswordHandler}
              required
            />
          </Form.Item>

          <Form.Item>
            <label>Confirm Password</label>
            <Input
              id="confirm_password"
              placeholder="비밀번호를 확인하십시오!"
              type="password"
              value={confirmPassword}
              onChange={onConfirmPasswordHandler}
              required
            />
          </Form.Item>
          <br />

          <Button type="primary" htmlType="submit">
              회원가입
          </Button>
        </form>
            
        <a style={{textDecoration: 'none'}} href = '/login'>
            <Button className='cancel_btn'>
                취소
            </Button>
        </a>
      </div>
    </div>
  )
}

export default withRouter(RegisterPage);