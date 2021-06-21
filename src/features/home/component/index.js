import {connect} from 'react-redux';
import Home from "./home";
import {loadReposError, loadReposMore, loadReposSuccess, updateSearchKeyword} from "../redux/repoReducer";


const mapPropsToState = (state) => {
    return {
        searchInput: state.repoStore.searchInput,
    };
};
const mapDispatchToProps = (dispatch) => ({
    onSearchChange: (keyword) => dispatch(updateSearchKeyword(keyword)),
    loadError: () => dispatch(loadReposError()),
    loadSuccess: (details) => dispatch(loadReposSuccess(details)),
    loadReposMoreSuccess: (details) => dispatch(loadReposMore(details)),
});

export default connect(mapPropsToState, mapDispatchToProps)(Home);