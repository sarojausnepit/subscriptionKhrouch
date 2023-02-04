import { ofType } from "redux-observable";
import { catchError, switchMap, mergeMap, delay } from "rxjs/operators";
import { from, of } from "rxjs";
import { Api } from "../Helpers/BaseUrlProvider";

export const AllEpic = (action$) =>
  action$.pipe(
    ofType(
      "ADMIN_AUTHENTICATION_REQUEST",
      "ADMIN_SUBSCRIPTION_REQUEST",
      "ADMIN_GET_ALL_PACKAGE_REQUEST",
      "ADMIN_ACTIVATE_PACKAGE_REQUEST",
      "ADMIN_DEACTIVATE_PACKAGE_REQUEST"
    ),
    mergeMap((action) =>
      from(Api(action)).pipe(
        mergeMap((response) => {
          console.log("this is the response from db",response)
          if (action.type_data.successInternalState) {
            action.type_data.successInternalState(response.data);
            // console.log("checking action type",action.type_data.success)
            // console.log("checking the payload",response.data)
          }
          return of({
            type: action.type_data.success,
            payload: response.data,
          });
        }),
        catchError((err) => {
          if (action.type_data.failureInternalState) {
            action.type_data.failureInternalState(err?.response?.data);
          }
          return of({
            type: action.type_data.failure,
            payload: err.response,
          });
        })
      )
    )
  );
