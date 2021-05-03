import axios from "axios";

export const setLocalStorage=(key,value)=>{
    if(process.browser){
        localStorage.setItem(key,value)
    }
}
export const removeLocalStorage=(key)=>{
    if(process.browser){
        localStorage.removeItem(key)
    }
}

export const authenticate=(data,next)=>{
    setLocalStorage('token',data.token)
    setLocalStorage('email',data.email)
    setLocalStorage('fullName',data.fullName)
    setLocalStorage('userId',data.userId)
    next();
}

export const logout=(next)=>{
    removeLocalStorage('token');
    removeLocalStorage('email');
    removeLocalStorage('fullName')
    removeLocalStorage('userId')
    next();
}

export const isAuth=()=>{
    if(process.browser)
    {
        const tokenCheck=localStorage.getItem('token')
        if(tokenCheck){
            if(localStorage.getItem('email'))
                return localStorage.getItem('email')
            else
                return false
        }
    }
}

export const getToken=()=>{
    if(process.browser){
        const tokenCheck=localStorage.getItem('token')
        if(tokenCheck)
            return localStorage.getItem('token')
        else
            return false

    }
}
export const getUserInfo=()=>{
    if(process.browser){
        const tokenCheck=localStorage.getItem('token')
        if(tokenCheck) {
            const userInfo={
                email:localStorage.getItem('email'),
                fullName:localStorage.getItem('fullName'),
                userId:localStorage.getItem('userId')
            }
            return userInfo
        }
        else
            return false

    }
}


