import {connect} from 'react-redux';
import Home from "./home";
import {loadReposError, loadReposSuccess} from "../redux/repoReducer";


const mapPropsToState = (state) => {
    return {
        repoList: state.repoStore.repos,

    };
};
const mapDispatchToProps = (dispatch) => ({
    loadSuccess: (repoList) => dispatch(loadReposSuccess(repoList)),
    loadError: () => dispatch(loadReposError()),
});

export default connect(mapPropsToState, mapDispatchToProps)(Home);