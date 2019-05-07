// A "smart" container has three jobs:
// - grab stuff from redux
// - grab a dumb compnent
// - smash them together
import { connect } from 'react-redux';
import PokeList from '../components/PokeList';
import {
    catchCard
} from '../actions-reducers';


// We have two jobs:
// - tell it how to map redux state to react props
// - tell it how to map redux dispatch to react props

// "translate" from redux state to react props
const mapStateToProps = (state) => {
    // return our own custom props object
    return {
        // react: redux
        cards: state.cards,
        visibilityFilter: state.visibilityFilter
    }
};


// "translate" from redux dispatch to react props
const mapDispatchToProps = (dispatch) => {
    // return our own custom props object
    return {
        // The anonymous function is "just like" our this._helperFunctions
        handleClick: (id) => {
            // behind the scenes, redux
            // is doing the same as our "setState"
            dispatch(catchCard(id));
        }
    };
};

// connect gives us a function that knows how to 
// translate for a dumb component
const makeComponentSmart = connect(
    mapStateToProps, 
    mapDispatchToProps
);
const SmartPokeList = makeComponentSmart(PokeList);

export default SmartPokeList;

