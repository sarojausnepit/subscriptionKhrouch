import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

import { AllEpic } from "./myEpics";
import LoginReducer from "./Reducers/Login";
import SubscriptionReducer from "./Reducers/Subscription";
import PackageReducer from "./Reducers/Package";

export const rootReducer = combineReducers({ LoginReducer, SubscriptionReducer, PackageReducer});
export const rootEpic = combineEpics(AllEpic);
