export const LOAD_REPOS_SUCCESS_ACTION = 'LOAD_REPOS_SUCCESS_ACTION';
export const LOAD_REPOS_ERROR_ACTION = 'LOAD_REPOS_ERROR_ACTION';
export const LOAD_REPOS_MORE_ACTION = 'LOAD_REPOS_MORE_ACTION';
export const SEARCH_CHANGE_ACTION = 'SEARCH_CHANGE_ACTION';


const initialState = {
    searchInput: '',
    error: false,
    repos: [],
    total: undefined,
    initialLoading: false,
};

export const loadReposSuccess = (repoList) => ({
    type: LOAD_REPOS_SUCCESS_ACTION,
    data: repoList
});
export const loadReposMore = (repoList) => ({
    type: LOAD_REPOS_MORE_ACTION,
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
                return {
                    ...state,
                    repos: action.data.repos,
                    total: action.data.total,
                    initialLoading: false, error: false
                };
            case LOAD_REPOS_MORE_ACTION:
                return {
                    ...state,
                    repos: [...state.repos, ...action.data.repos],
                    error: false
                };
            case LOAD_REPOS_ERROR_ACTION:
                return {
                    ...state,
                    error: true,
                    initialLoading: false
                };
            case SEARCH_CHANGE_ACTION:
                return {
                    ...state, repos: [],
                    error: false,
                    searchInput: action.data,
                    initialLoading: true
                };
            default:
                return state;
        }
    };

export default repoReducer;