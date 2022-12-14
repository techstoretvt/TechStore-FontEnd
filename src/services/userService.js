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

const loginGoogle = (data) => {
    return axios.post('/api/login-google', data)
}

const loginFacebook = (data) => {
    return axios.post('/api/login-facebook', data)
}

const loginGithub = (data) => {
    return axios.post('/api/login-github', data)
}

export {
    CreateUser,
    verifyCreateUser,
    UserLogin,
    refreshTokenService,
    GetUserLogin,
    loginGoogle,
    loginFacebook,
    loginGithub
}

