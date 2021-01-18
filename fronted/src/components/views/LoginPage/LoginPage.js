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
        <Title>로그인</Title>
        <form className='login_form' onSubmit={onSubmitHandler}>
          <Form.Item>
            <label>email</label>
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
            <label>password</label>
            <Input
              id="password"
              placeholder="패스워드를 입력하세요."
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