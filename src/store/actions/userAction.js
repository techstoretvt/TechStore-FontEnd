import jwt_decode from "jwt-decode";

import actionTypes from "./actionTypes"
import { refreshTokenService, GetUserLogin } from '../../services/userService'


const updateTokensSuccess = (data, dispatch) => {
    dispatch({
        type: actionTypes.UPDATE_TOKENS_SUCCESS,
        data: data
    })
}

const updateTokensFaild = (dispatch) => {
    dispatch({
        type: actionTypes.UPDATE_TOKENS_FAILD
    })
}

const getLogin = async (tokens, dispatch) => {
    //refresh token
    await handleRefreshToken(tokens, dispatch);

    //call api
    let res = await GetUserLogin(tokens.accessToken);
    console.log('check res: ', res);
    if (res && res.errCode === 0) {
        dispatch({
            type: actionTypes.UPDATE_CURRENT_USER,
            data: res.data
        })
    }

}

const handleRefreshToken = async (tokens, dispatch) => {

    try {
        var decoded = await jwt_decode(tokens.accessToken);

        let date = new Date();
        if (decoded.exp < date.getTime() / 1000) {
            let res = await refreshTokenService({ refreshToken: tokens.refreshToken });

            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.UPDATE_TOKENS_SUCCESS,
                    data: res.data
                })
            }
            else if (res && res.errCode === 2) {
                dispatch({
                    type: actionTypes.UPDATE_TOKENS_FAILD
                })
            }
            else {
            }
        }
        else {
        }
    } catch (error) {
        console.log('decode faild');
        // dispatch({
        //     type: actionTypes.UPDATE_TOKENS_FAILD
        // })
    }
}

export {
    updateTokensSuccess,
    updateTokensFaild,
    getLogin
}