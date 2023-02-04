import React from "react";
import { Form, Button, Checkbox, Input } from "antd";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { allActions } from "../Redux/myActions";

const LoginForm = () => {
  const loginState = useSelector((state) => state.LoginReducer);
  const actions = useDispatch();

  const handleLoginSubmit = (values) => {
    actions(
      allActions(values, {
        method: "post",
        endPoint: "/authenticate",
        attempt: "ADMIN_AUTHENTICATION_REQUEST",
        success: "ADMIN_AUTHENTICATION_REQUEST_SUCCESS",
        failure: "ADMIN_AUTHENTICATION_REQUEST_FAILURE",
        saveBearerToken: true,
      })
    );
  };

  return (
    <div
      className="form-container"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loginState.isAuthenticated ? (
        <Navigate to="/dashboard" replace={true} />
      ) : (
        <header className="form-header">
          <Form
            layout="vertical"
            style={{
              width: "22rem",
              backgroundColor: "#F5F5F5",
              padding: "2rem 2.5rem",
              borderRadius: "0.5rem",
            }}
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 24 }}
            autoComplete="off"
            onFinish={handleLoginSubmit}
            onFinishFailed={(error) => {
              console.log(error);
            }}
          >
            <h2 style={{ textAlign: "center" }}>Login</h2>
            <Form.Item
              name="userName"
              label="Email"
              rules={[
                { required: true, message: "Please enter email" },
                {
                  type: "email",
                  message: "Please enter valid email",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Enter your Email" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please enter password",
                },
                {
                  pattern:
                    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/,
                  message:
                    "Password must contain at least one uppercase,one number,one special character, and be at least 8 characters long",
                },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Enter your Password" />
            </Form.Item>

            <Form.Item
              style={{ margin: "0 auto", display: "block" }}
              name="isremember"
              valuePropName="checked"
              wrapperCol={{ span: 20 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
              <Button block type="primary" htmlType="submit">
                Log In
              </Button>
            </Form.Item>
          </Form>
        </header>
      )}
    </div>
  );
};

export default LoginForm;
