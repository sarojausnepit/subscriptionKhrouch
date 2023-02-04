import { message } from "antd";

const INIT_STATE = {
  isLoading: false,
  id: null,
  packageName: "",
  isSubscribe: false,
};

const SubscriptionReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADMIN_SUBSCRIPTION_REQUEST": {
      return {
        ...state,
        isLoading: true,
        isSubscribe: false,
      };
    }
    case "ADMIN_SUBSCRIPTION_REQUEST_SUCCESS": {
      if (action?.payload?.message === "Package added successfully") {
        message.success(action.payload.message);
      }
      return {
        ...state,
        isLoading: false,
        isSubscribe: true,
      };
    }
    case "ADMIN_SUBSCRIPTION_REQUEST_FAILURE": {
      if (action.payload.response?.data?.message) {
        message.error(action.payload.response?.data?.message);
      } else {
        message.error("Unable to add subscription");
      }
      return {
        ...state,
        isLoading: false,
        isSubscribe: false,
      };
    }
    default:
      return state;
  }
};

export default SubscriptionReducer;
