export const LOAD_REPOS_SUCCESS_ACTION = 'LOAD_REPOS_SUCCESS_ACTION';
export const LOAD_REPOS_ERROR_ACTION = 'LOAD_REPOS_ERROR_ACTION';


const initialState = {
    searchInput: 'initial input',
    error: false,
};

export const loadReposSuccess = (repoList) => ({
    type: LOAD_REPOS_SUCCESS_ACTION,
    data: repoList
});

export const loadReposError = () => ({
    type: LOAD_REPOS_ERROR_ACTION
});

const repoReducer =
    (state = initialState, action) => {
        switch (action.type) {
            case LOAD_REPOS_SUCCESS_ACTION:
                return {...state, repos: action.data};
            case LOAD_REPOS_ERROR_ACTION:
                return {...state, repos: [], error: true};
            default:
                return state;
        }
    };

export default repoReducer;