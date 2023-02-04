import React, { useState } from "react";
import { Drawer, Form, Input, Button, Space, Row, Col } from "antd";
import { useDispatch } from "react-redux";
import { allActions } from "../Redux/myActions";

const AddSubscription = ({ open, setOpen }) => {
  const onClose = () => { 
    setOpen(false);
  };
  const [form] = Form.useForm();
  const actions = useDispatch();

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
    <div className="addSubscription-container">
      <Drawer
        style={{ color: "#00aff0", display:"flex", justifyContent:"center" }}
        title={`Add Subscription`}
        placement="right"
        onClose={onClose}   
        open={open}
        width="75%"
        // size="larger"
      >
        <Form
          style={{
            width: "100%",
            maxWidth: "1024px",
            margin: "1rem 2rem",
            padding: "1rem 2rem",
            backgroundColor: "white",
            borderRadius: "4px",
            display:"flex",
            justifyContent:"center",
            flexDirection:"column"
          }}
          autoComplete="off"
          wrapperCol={{ span: 24 }}
          labelCol={{ span: 7 }}
          form={form}
          onFinish={handleSubmitSubscription}
          onFinishFailed={(error) => {
            console.log(error);
          }}
        >
          <Row gutter={24}>
            <Col span={12}>
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
            </Col>
            <Col span={12}>
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
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
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
            </Col>
            <Col span={12}>
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
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
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
            </Col>
            <Col span={12}>
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
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
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
            </Col>
            <Col span={12}>
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
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
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
            </Col>
            <Col span={12}>
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
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
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
            </Col>
            <Col span={12}>
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
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item>
                <Button block type="primary" htmlType="submit">
                  Add Subscription
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </div>
  );
};

export default AddSubscription;
