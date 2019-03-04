import { IReduxHelloState } from "./IReduxHelloState";
import { IUserState } from './IUserState';

export interface IGlobalState {
  reduxHelloState: IReduxHelloState,
  loginState: IUserState
}
