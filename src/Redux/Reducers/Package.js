import { message } from "antd";

const INIT_STATE = {
  isLoading: false,
  data: [],
  isActivated: false,
  isDeactived: false,
  isSubscribe: false
};

const PackageReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADMIN_GET_ALL_PACKAGE_REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "ADMIN_GET_ALL_PACKAGE_REQUEST_SUCCESS": {
      // console.log("this is from the all package success",action.payload)
      return {
        ...state,
        isLoading: false,
        // data:[...action.payload.data.data]
        data: action.payload.data,
        isActivated: null,
        isDeactived:null,
        isSubscribe:null
      };
    }
    case "ADMIN_GET_ALL_PACKAGE_REQUEST_FAILURE": {
      if (action.payload.response?.data?.message) {
        message.error(action.payload.response?.data?.message);
      } else if ((action.payload.message = "Network Error!")) {
        message.error("Network Error");
      } else {
        message.error("Error! unable to login");
      }
      return {
        ...state,
        isLoading: false,
      };
    }

    case "ADMIN_ACTIVATE_PACKAGE_REQUEST": {
      return {
        ...state,
      };
    }

    case "ADMIN_ACTIVATE_PACKAGE_REQUEST_SUCCESS": {
      // console.log("this is from the package activate success",action)
      return {
        ...state,
        isActivated: true,
      };
    }

    case "ADMIN_ACTIVATE_PACKAGE_REQUEST_FAILURE": {
      return {
        ...state,
        isActivated: false,
      };
    }

    case "ADMIN_DEACTIVATE_PACKAGE_REQUEST": {
      return {
        ...state,
      };
    }

    case "ADMIN_DEACTIVATE_PACKAGE_REQUEST_SUCCESS": {
      // console.log("this is from the package activate success",action)
      return {
        ...state,
        isDeactivated: true,
      };
    }

    
    case "ADMIN_DEACTIVATE_PACKAGE_REQUEST_FAILURE": {
        // console.log("this is from the package activate success",action)
        return {
          ...state,
          isDeactivated: false,
        };
      }

    default:
      return state;
  }
};

export default PackageReducer;
