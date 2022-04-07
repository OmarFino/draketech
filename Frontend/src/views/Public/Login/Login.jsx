import { Form, Input, Button, Divider } from "antd";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { loginPending } from "../../../services/authSlice";

import "./Login.css";

const { Item } = Form;

const Login = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(loginPending({ ...values }));
  };

  return (
    <div className="login">
      <div className="login--form">
        <h1>Welcome</h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <Item
            label="email"
            name="email"
            rules={[{ required: true, type: "email" }]}
            hasFeedback
          >
            <Input />
          </Item>
          <Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            hasFeedback
          >
            <Input.Password />
          </Item>
          <Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Item>
          <Divider />
        </Form>
        <p>
          <Link to="/register">I don't have an acount</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
