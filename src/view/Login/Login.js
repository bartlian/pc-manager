import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { Row, Col, Form, Input, Button, message } from 'antd';
import './Login.scss';
import login from '../../api/user/login';
import { changeAccountValue, changeLoginStatus } from '../../store/actions';

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
    offset: 2,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 6,
    span: 6,
    justify: 'center',
  },
};

function Login(props) {
  let history = useHistory();

  const onFinish = values => {
    console.log('Success:', values);
    const { username, password } = values;

    login(username, password)
      .then(res => {
        console.log(res);
        const { status, msg, data } = res.data;

        if (status === 'F') {
          message.error(msg);
          return;
        }
        // 登录成功 存储token
        localStorage.setItem('token', data.token);
        localStorage.setItem('account', data.account);
        // 保存用户信息至全局
        props.changeAccountValue(data.account);
        props.changeLoginStatus(true);
        // 路由跳转
        history.push('/');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <main className="content">
      <Row align="middle">
        <Col span={6} offset={9} className="modal">
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="用户名"
              name="username"
              rules={[
                {
                  required: true,
                  message: '输入用户名',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="密码"
              name="password"
              rules={[
                {
                  required: true,
                  message: '输入密码',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </main>
   
  );
};

export default connect(null, { changeAccountValue, changeLoginStatus })(Login);