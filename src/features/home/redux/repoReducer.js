export const LOAD_REPOS_SUCCESS_ACTION = 'LOAD_REPOS_SUCCESS_ACTION';
export const LOAD_REPOS_ERROR_ACTION = 'LOAD_REPOS_ERROR_ACTION';
export const SEARCH_CHANGE_ACTION = 'SEARCH_CHANGE_ACTION';


const initialState = {
    searchInput: '',
    error: false,
    repos: [],
    total: undefined,
};

export const loadReposSuccess = (repoList) => ({
    type: LOAD_REPOS_SUCCESS_ACTION,
    data: repoList
});

export const loadReposError = () => ({
    type: LOAD_REPOS_ERROR_ACTION
});

export const updateSearchKeyword = (keyword) => ({
    type: SEARCH_CHANGE_ACTION,
    data: keyword
});

const repoReducer =
    (state = initialState, action) => {
        switch (action.type) {
            case LOAD_REPOS_SUCCESS_ACTION:
                return {...state, repos: action.data.repos, total: action.data.total};
            case LOAD_REPOS_ERROR_ACTION:
                return {...state, repos: [], error: true};
            case SEARCH_CHANGE_ACTION:
                return {...state, repos: [], error: false, searchInput: action.data};
            default:
                return state;
        }
    };

export default repoReducer;