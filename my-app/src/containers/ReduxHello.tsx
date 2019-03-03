import Hello from '../components/ReduxHello';
import { ReduxHelloProps } from 'src/components/ReduxHello';
import * as actions from '../actions/';
// import onIncrement = actions.incrementEnthusiasm;
// import onDecrement = actions.decrementEnthusiasm;
import { IGlobalState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

const mapStateToProps = (state: IGlobalState) => ({
    enthusiasmLevel: state.reduxHelloState.enthusiasmLevel,
    name: state.reduxHelloState.languageName,
} as ReduxHelloProps);

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}

//export default connect(mapStateToProps, { onIncrement, onDecrement })(Hello);
export default connect(mapStateToProps, mapDispatchToProps)(Hello);
