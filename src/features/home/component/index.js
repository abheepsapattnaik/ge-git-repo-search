import {connect} from 'react-redux';
import Home from "./home";
import {loadReposError, loadReposSuccess, updateSearchKeyword} from "../redux/repoReducer";


const mapPropsToState = (state) => {
    return {
        repoList: state.repoStore.repos,
    };
};
const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (keyword) => dispatch(updateSearchKeyword(keyword)),
    loadError: () => dispatch(loadReposError()),
    loadSuccess: (details) => dispatch(loadReposSuccess(details)),
});

export default connect(mapPropsToState, mapDispatchToProps)(Home);