import Login from '../components/Login';
import { LoginProps } from 'src/components/Login';
import * as actions from '../actions/Login';
import { IGlobalState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: IGlobalState) => ({
} as LoginProps);

export function mapDispatchToProps(dispatch: Dispatch<actions.LoginAction>) {
  return {
    submit: () => dispatch(actions.Login())
  }
}

//export default connect(mapStateToProps, { onIncrement, onDecrement })(Hello);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
