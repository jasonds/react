import { combineReducers, Reducer } from "redux";
import { IGlobalState } from '../types/index';
import ReduxHelloReducer from "./ReduxHelloReducer";
import LoginReducer from "./LoginReducer";

export const rootReducer: Reducer<IGlobalState> = combineReducers<IGlobalState>(Object.assign({},{
  reduxHelloState: ReduxHelloReducer,
  loginState: LoginReducer
}));
