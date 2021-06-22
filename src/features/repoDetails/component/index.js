import {connect} from 'react-redux';

import RepoDetails from "./repoDetails";


const mapPropsToState = (state) => {
    return {
        repos: state.repoStore.repos,
        loadingStatus: state.repoStore.initialLoading,
    };
};


export default connect(mapPropsToState)(RepoDetails);