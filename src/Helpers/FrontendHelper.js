import cookie from "js-cookie"

//set in cookie
export const setCookie = (key, value) =>{
    // if (window !== "undefined"){
        console.log("you can set the token")
        cookie.set( key,value, {
            expires:10000000
        })
    // }
}

//remove from cookie
export const removeCookie= (key) =>{
    if (window !== "undefined"){
        cookie.remove(key,{
            expires:1
        })
    }
}

//get from cookie such as stored token
export const getCookie= (key) =>{
    if(window !== "undefined"){
        return cookie.get(key)
    }
}

//will be useful when we need to make request to server
//set in localstorage
export const setLocalStorage = (key, value) =>{
    if (window !=="undefined"){
        localStorage.setItem(key, JSON.stringify(value))
    }
}

//remove from localstorage
export const removeLocalStorage=(key)=>{
    if(window !=="undefined"){
        localStorage.removeItem(key)
    }
}


//authenticate user by passing data to cookies and localstorage
export const authenticateAdmin=(response, next)=>{
    setCookie("token",response.data.token)
//     setLocalStorage("adminProfileFirstName",response.data.adminFirstName)
//     setLocalStorage("adminProfileLastName",response.data.adminLastName)
}

export const isAuth =() =>{
    const {accessToken}= JSON.parse(localStorage.getItem('userAccessKey'))
    if(accessToken){
        return true
    }
    else{
        return false
    }
}