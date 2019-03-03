import { EnthusiasmAction } from '../actions';
import { IReduxHelloState } from '../types/ReduxHelloState';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

export const initialState: IReduxHelloState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
}

// todo test
export default (state: IReduxHelloState = initialState, action: EnthusiasmAction): IReduxHelloState => {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state;
  }
  return state;
};
