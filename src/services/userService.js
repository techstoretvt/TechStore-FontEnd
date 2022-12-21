import axios from '../axios'

const CreateUser = (data) => {
    return axios.post('/api/create-user', data)
}

const verifyCreateUser = async (data) => {
    return axios.post('/api/verify-create-user', data)
}

const UserLogin = async (data) => {
    return axios.post('/api/user-login', data)
}

const refreshTokenService = (data) => {
    return axios.post('/api/refresh-token', data)
}

const GetUserLogin = (accessToken) => {
    return axios.get(`/api/get-user-login?accessToken=${accessToken}`)
}

export {
    CreateUser,
    verifyCreateUser,
    UserLogin,
    refreshTokenService,
    GetUserLogin
}

