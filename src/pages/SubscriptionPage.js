import React from "react";
import { Form, Input, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { allActions } from "../Redux/myActions";

const SubscriptionPage = () => {
  const actions = useDispatch();
  const [form] = Form.useForm();

  const handleSubmitSubscription = (values) => {
    actions(
      allActions(values, {
        method: "post",
        endPoint: "/package/add",
        attempt: "ADMIN_SUBSCRIPTION_REQUEST",
        success: "ADMIN_SUBSCRIPTION_REQUEST_SUCCESS",
        failure: "ADMIN_SUBSCRIPTION_REQUEST_FAILURE",
        saveBearerToken: false,
      })
    );
  };
  return (
    <div
      className="subscription_container"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#F5F5F5",
      }}
    >
      <Form
        style={{
          width: "100%",
          maxWidth: "1024px",
          margin: "1rem 2rem",
          padding: "1rem 2rem",
          backgroundColor: "white",
          borderRadius: "4px",
        }}
        autoComplete="off"
        wrapperCol={{ span: 24 }}
        labelCol={{ span: 4 }}
        form={form}
        onFinish={handleSubmitSubscription}
        onFinishFailed={(error) => {
          console.log(error);
        }}
      >
        <Form.Item>
          <h1 style={{ color: "#00aff0" }}>Add Subscription</h1>
        </Form.Item>
        <Form.Item
          name="packageName"
          labelAlign="left"
          label="Package Name"
          rules={[
            {
              required: true,
              message: "Please enter packageName",
            },
            {
              pattern: /^(?=.*[a-zA-Z0-9]).{3,}$/,
              message:
                "Enter only uppercase,lowercase letter and number with min length 3",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter packageName" />
        </Form.Item>
        <Form.Item
          name="packagePrice"
          labelAlign="left"
          label="Package Price"
          rules={[
            {
              required: true,
              message: "Please enter packagePrice",
            },
            {
              pattern: /^\d+$/,
              message: "Provide only numeric value",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter packagePrice" />
        </Form.Item>
        <Form.Item
          name="packageDuration"
          labelAlign="left"
          label="Package Duration"
          rules={[
            {
              required: true,
              message: "Please enter packageDuration",
            },
            {
              pattern: /^(?=.*[a-zA-Z0-9]).{3,}$/,
              message:
                "Enter only uppercase,lowercase letter and number with min length 3",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter packageDuration" />
        </Form.Item>
        <Form.Item
          name="discount"
          labelAlign="left"
          label="Discount"
          rules={[
            {
              required: true,
              message: "Please enter discountAmount",
            },
            {
              pattern: /^\d+/,
              message: "Please enter numeric value",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter discountAmount" />
        </Form.Item>
        <Form.Item
          name="description"
          labelAlign="left"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please enter description",
            },
            {
              pattern: /^\S.*/,
              message: "Whitespace is invalid",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter description" />
        </Form.Item>
        <Form.Item
          name="userCount"
          labelAlign="left"
          label="User Count"
          rules={[
            {
              required: true,
              message: "Please enter userCount",
            },
            {
              pattern: /^\d+/,
              message: "Please enter numeric value",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter userCount"></Input>
        </Form.Item>
        <Form.Item
          name="deviceCount"
          labelAlign="left"
          label="Device Count"
          rules={[
            {
              required: true,
              message: "Please enter deviceCount",
            },
            {
              pattern: /^\d+/,
              message: "Please enter numeric value",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter deviceCount"></Input>
        </Form.Item>
        <Form.Item
          name="leadForms"
          labelAlign="left"
          label="Lead Forms"
          rules={[
            {
              required: true,
              message: "Please enter leadForms",
            },
            {
              pattern: /^\d+/,
              message: "Please enter numeric value",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter leadFormsVale"></Input>
        </Form.Item>
        <Form.Item
          name="leadGeneration"
          labelAlign="left"
          label="Lead Generation"
          rules={[
            {
              required: true,
              message: "Please enter leadGeneration",
            },
            {
              pattern: /^\S.*/,
              message: "Whitespace is invalid",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter storage" />
        </Form.Item>
        <Form.Item
          name="storage"
          labelAlign="left"
          label="Storage"
          rules={[
            {
              required: true,
              message: "Please enter storage",
            },
            {
              pattern: /^\S.*/,
              message: "Whitespace is invalid",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter storageSize" />
        </Form.Item>
        <Form.Item
          name="planDuration"
          labelAlign="left"
          label="Plan Duration"
          rules={[
            {
              required: true,
              message: "Please enter planDuration",
            },
            {
              pattern: /^\d+/,
              message: "Please enter numeric value",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter planDuration" />
        </Form.Item>
        <Form.Item
          name="storageInGb"
          labelAlign="left"
          label="Storage in GB"
          rules={[
            {
              required: true,
              message: "Please enter storageInGb",
            },
            {
              pattern: /^\d+/,
              message: "Please enter numeric value",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter storageInGb" />
        </Form.Item>
        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Add Subscription
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SubscriptionPage;
