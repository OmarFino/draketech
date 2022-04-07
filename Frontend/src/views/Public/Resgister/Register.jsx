import { Form, Input, Button, Divider } from "antd";
import { Link } from "react-router-dom";

import "./Register.css";

const { Item } = Form;

const Register = () => {
  return (
    <div className="register">
      <div className="register--form">
        <h1>Welcome</h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Item
            label="Name"
            name="name"
            rules={[{ required: true, type: "name" }]}
            hasFeedback
          >
            <Input />
          </Item>
          <Item
            label="UserName"
            name="username"
            rules={[{ required: true, type: "username" }]}
            hasFeedback
          >
            <Input />
          </Item>
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
              Register
            </Button>
          </Item>
          <Divider />
          <Link to="/">Already have an account?</Link>
        </Form>
      </div>
    </div>
  );
};

export default Register;
