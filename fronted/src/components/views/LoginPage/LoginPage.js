import React, { useState } from 'react';
import { Form, Typography, Input, Button } from 'antd';

// css 
import './LoginPage.scss';

const { Title } = Typography;

function LoginPage(props) {

  // const [상태값변수, 상태값 갱신 함수] = useState(상태초기값)
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
    <div className='login_page_wrap'>
      
      <div className='login_container'>
        <Title>Log In</Title>
        <form className='login_form' onSubmit={onSubmitHandler}>
          <Form.Item>
            <label>Email</label>
            <Input
              id="email"
              placeholder="이메일을 입력하십시오."
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
              placeholder="비밀번호를 입력하십시오."
              type="password"
              value={password}
              onChange={onPasswordHandler}
              required
            />
          </Form.Item>
          <br />

          <Button type="primary" htmlType="submit">
            로그인
          </Button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;