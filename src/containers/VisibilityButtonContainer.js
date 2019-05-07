import { connect } from 'react-redux';
import VisibilityButton from '../components/VisibilityButton';
import {
    setVisibilityAll,
    setVisibilityCaught,
    setVisibilityUncaught
} from '../actions-reducers';

const  mapStateToProps = (state) => {
    return {
        visibilityFilter: state.visibilityFilter
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleAll: () => {
            dispatch(setVisibilityAll());
        },
        handleCaught: () => {
            dispatch(setVisibilityCaught());
        },
        handleUncaught: () => {
            dispatch(setVisibilityUncaught());
        }
    }
}

const makeComponentSmart = connect(
    mapStateToProps, 
    mapDispatchToProps
);
const SmartVisibilityButton = makeComponentSmart(VisibilityButton);

export default SmartVisibilityButton;