export const allActions=(
    payload= {},
    type= {
        method:"post",
        endPoint:"/login",
        attempt:"LOGIN_FETCHING_DATA_ATTEMPT",
        success:"LOGIN_FETCHING_DATA_SUCCESS",
        failure:"LOGIN_FETCHING_DATA_FAILURE",
        navigateTo:'ABC',

        saveBearerToken: false,
        successInternalState:()=>console.log("Hi success"),
        failureInternalState:()=>console.log("Oh failure")
    }
) =>  ({type: type.attempt, type_data: type, payload})
    // console.log({type: type.attempt, type_data: type, payload})


