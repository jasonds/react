import * as axios from "axios";
import * as constants from '../constants';

export interface ILogin {
    type: string
}

export type LoginAction = ILogin;
export function Login(): any {
    return dispatch => {
        dispatch({
            type: constants.INPROGRESS_LOGIN
        } as ILogin);

        return axios.default.post('https://localhost:44324/api/authentication/generate', {
                email: "jsears@rightpoint.com",
                password: "Goodsir@2"
            })
            .then((response) => {
                dispatch({
                    type: constants.SUCCESS_LOGIN,
                    authenticated: true,
                    token: response.data.token
                } as ILogin);
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: constants.FAILURE_LOGIN,
                    authenticated: false,
                    token: null
                } as ILogin);                
            });
    };
}
