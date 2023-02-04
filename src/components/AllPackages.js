import React from "react";
import { useEffect, useState } from "react";
import { Button, Table } from "antd";
import AddSubscription from "./AddSubscription";
import { allActions } from "../Redux/myActions";
import { useDispatch, useSelector } from "react-redux";

const AllPackages = () => {
  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    setOpen(true);
  };

  const { isSubscribe } = useSelector((state) => state.SubscriptionReducer);
  const { data, isActivated, isDeactivated } = useSelector(
    (state) => state.PackageReducer
  );

  const actions = useDispatch();
  useEffect(() => {
    actions(
      allActions(null, {
        method: "get",
        endPoint: "/package/get-all",
        attempt: "ADMIN_GET_ALL_PACKAGE_REQUEST",
        success: "ADMIN_GET_ALL_PACKAGE_REQUEST_SUCCESS",
        failure: "ADMIN_GET_ALL_PACKAGE_REQUEST_FAILURE",
        successInternalState: (data) => console.log(data),
        saveBearerToken: false,
      })
    );
  }, [isActivated, isDeactivated, isSubscribe]);

  const handleSubscriptionRequest = (record) => {
    if (!record.isActive) {
      actions(
        allActions(record, {
          method: "post",
          endPoint: `/package/add/activate-package/${record.id}`,
          attempt: "ADMIN_ACTIVATE_PACKAGE_REQUEST",
          success: "ADMIN_ACTIVATE_PACKAGE_REQUEST_SUCCESS",
          failure: "ADMIN_ACTIVATE_PACKAGE_REQUEST_FAILURE",
          successInternalState: (data) => console.log(data),
          saveBearerToken: false,
        })
      );
    } else {
      actions(
        allActions(record, {
          method: "post",
          endPoint: `/package/add/deactivate-package/${record.id}`,
          attempt: "ADMIN_DEACTIVATE_PACKAGE_REQUEST",
          success: "ADMIN_DEACTIVATE_PACKAGE_REQUEST_SUCCESS",
          failure: "ADMIN_DEACTIVATE_PACKAGE_REQUEST_FAILURE",
          successInternalState: (data) => console.log(data),
          saveBearerToken: false,
        })
      );
    }
  };

  const columnFields = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Package Name",
      dataIndex: "packageName",
    },
    {
      key: "3",
      title: "Package Price",
      dataIndex: "packagePrice",
    },
    {
      key: "4",
      title: "Package Duration",
      dataIndex: "packageDuration",
    },
    {
      key: "5",
      title: "Discount",
      dataIndex: "discount",
    },
    {
      key: "6",
      title: "Description",
      dataIndex: "description",
    },
    {
      key: "7",
      title: "User Count",
      dataIndex: "userCount",
    },
    {
      key: "8",
      title: "Device Count",
      dataIndex: "deviceCount",
    },
    {
      key: "9",
      title: "Lead Forms",
      dataIndex: "leadForms",
    },
    {
      key: "13",
      title: "Package Type",
      render: (isFree) => (isFree ? "Free" : "Paid"),
    },
    {
      key: "12",
      title: "Active Status",
      render: (record) => (
        <Button
          type={record.isActive ? "primary" : "default"}
          onClick={() => handleSubscriptionRequest(record)}
        >
          {record.isActive ? "Active" : "Inactive"}
        </Button>
      ),
    },
    {
      key: "10",
      title: "Lead Generation",
      dataIndex: "leadGeneration",
    },
    {
      key: "11",
      title: "Storage",
      dataIndex: "storage",
    },
  ];

  return (
    <div className="package-container">
      {data ? (
        <div className="packageTable-container">
          <div className="package-header" style={{ padding: "1rem" }}>
            <Button type="primary" onClick={handleDrawer}>
              Add Subscription
            </Button>
            {<AddSubscription open={open} setOpen={setOpen} />}
          </div>
          <div>
            <Table
              tableLayout="fixed"
              columns={columnFields}
              dataSource={data}
              pagination={{ pageSize: 6 }}
              scroll={{ x: 1200 }}
            ></Table>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default AllPackages;
