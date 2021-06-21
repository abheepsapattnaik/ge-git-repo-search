import {connect} from 'react-redux';

import RepoDetails from "./repoDetails";


const mapPropsToState = (state) => {
    return {
        repos: state.repoStore.repos
    };
};


export default connect(mapPropsToState)(RepoDetails);