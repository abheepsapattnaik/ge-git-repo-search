import {connect} from 'react-redux';
import RepoError from "./repoError";


const mapPropsToState = (state) => {
    return {
        errorStatus: state.repoStore.error,
    };
};


export default connect(mapPropsToState)(RepoError);